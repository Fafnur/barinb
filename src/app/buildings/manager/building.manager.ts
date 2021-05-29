import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Building } from '@app/buildings/common';
import { BuildingFacade } from '@app/buildings/state';
import { Person } from '@app/persons/common';
import { PersonFacade } from '@app/persons/state';
import { Room } from '@app/rooms/common';
import { RoomFacade } from '@app/rooms/state';

export interface BuildingExtended extends Building {
  roomsExtended: Room[];
  personExtended: Person;
}

@Injectable()
export class BuildingManager {
  buildingsExtended$: Observable<BuildingExtended[]> = this.buildingFacade.buildings$.pipe(
    filter<Building[]>(Boolean),
    switchMap((buildings) =>
      buildings.length
        ? combineLatest(
            buildings.map((building) =>
              combineLatest([
                this.roomFacade.roomsByBuilding$(building.id),
                this.personFacade.person$(building.person).pipe(filter<any>(Boolean)),
              ]).pipe(
                map(([rooms, person]: [Room[], Person]) => ({
                  ...building,
                  roomsExtended: rooms,
                  personExtended: person,
                }))
              )
            )
          )
        : of([])
    )
  );

  buildingExtended$ = (id: number): Observable<BuildingExtended> =>
    this.buildingFacade.building$(id).pipe(
      filter<any>(Boolean),
      switchMap((building: Building) =>
        combineLatest([
          this.roomFacade.roomsByBuilding$(building.id),
          this.personFacade.person$(building.person).pipe(filter<any>(Boolean)),
        ]).pipe(
          map(([rooms, person]: [Room[], Person]) => ({
            ...building,
            roomsExtended: rooms,
            personExtended: person,
          }))
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
    this.personFacade.clearPersonsBuildings();
    this.roomFacade.clear();
    this.buildingFacade.clear();
  }

  removeBuilding(payload: Building): void {
    this.personFacade.removePersonBuilding({ id: payload.person, building: payload.id });
    this.roomFacade.removeRooms(payload.rooms);
    this.buildingFacade.removeBuilding({ id: payload.id });
  }
}
