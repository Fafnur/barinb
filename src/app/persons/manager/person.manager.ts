import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Building } from '@app/buildings/common';
import { BuildingFacade } from '@app/buildings/state';
import { Person } from '@app/persons/common';
import { PersonFacade } from '@app/persons/state';
import { Room } from '@app/rooms/common';
import { RoomFacade } from '@app/rooms/state';

export interface PersonBuildingExtended extends Building {
  roomsExtended: Room[];
}

export interface PersonExtended extends Person {
  buildingsExtended: PersonBuildingExtended[];
}

@Injectable()
export class PersonManager {
  personsExtended$: Observable<PersonExtended[]> = combineLatest([
    this.personFacade.persons$,
    this.buildingFacade.buildings$,
    this.roomFacade.rooms$,
  ]).pipe(
    map((data) =>
      data[0].map((person) => ({
        ...person,
        buildingsExtended: person.buildings.map((building) => ({
          ...data[1][building],
          roomsExtended: data[1][building].rooms.map((room) => data[2][room]),
        })),
      }))
    )
  );

  personExtended$ = (id: number): Observable<PersonExtended> =>
    this.personFacade.person$(id).pipe(
      filter<any>(Boolean),
      switchMap((person: Person) =>
        this.buildingFacade.buildingsByPerson$(person.id).pipe(
          filter<Building[]>(Boolean),
          switchMap((buildings) =>
            buildings.length
              ? combineLatest(
                  buildings.map((building) =>
                    this.roomFacade.roomsByBuilding$(building.id).pipe(
                      map((rooms) => ({
                        ...building,
                        roomsExtended: rooms,
                      }))
                    )
                  )
                ).pipe(
                  map((buildingsExtended) => ({
                    ...person,
                    buildingsExtended,
                  }))
                )
              : of({ ...person, buildingsExtended: [] })
          )
        )
      )
    );

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private readonly roomFacade: RoomFacade,
    private readonly buildingFacade: BuildingFacade,
    private readonly personFacade: PersonFacade
  ) {}

  clear(): void {
    this.roomFacade.clear();
    this.buildingFacade.clear();
    this.personFacade.clear();
  }

  removePerson(payload: PersonExtended): void {
    const ids: number[] = [];
    payload.buildingsExtended.forEach((building) => {
      ids.push(...building.rooms);
    });
    this.roomFacade.removeRooms(ids);
    this.buildingFacade.removeBuildings(payload.buildings);
    this.personFacade.removePerson({ id: payload.id });
  }
}
