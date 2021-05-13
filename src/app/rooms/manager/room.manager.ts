import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';
import { Person } from '@app/persons/common';
import { PersonService } from '@app/persons/service';
import { Room } from '@app/rooms/common';
import { RoomService } from '@app/rooms/service';

export interface BuildingExtended extends Building {
  personExtended: Person;
}

export interface RoomExtended extends Room {
  buildingExtended: BuildingExtended;
}

@Injectable()
export class RoomManager {
  roomsExtended$: Observable<RoomExtended[]> = this.roomService.rooms$.pipe(
    switchMap((rooms) =>
      rooms.length
        ? combineLatest(
            rooms.map((room) =>
              this.buildingService.building$(room.building).pipe(
                switchMap((building) =>
                  this.personService.person$(building.person).pipe(
                    map((person) => ({
                      ...room,
                      buildingExtended: {
                        ...building,
                        personExtended: person,
                      },
                    }))
                  )
                )
              )
            )
          )
        : of([])
    )
  );

  roomExtended$ = (id: number): Observable<RoomExtended> =>
    this.roomService.room$(id).pipe(
      switchMap((room) =>
        this.buildingService.building$(room.building).pipe(
          switchMap((building) =>
            this.personService.person$(building.person).pipe(
              map((person) => ({
                ...room,
                buildingExtended: {
                  ...building,
                  personExtended: person,
                },
              }))
            )
          )
        )
      )
    );

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private readonly roomService: RoomService,
    private readonly buildingService: BuildingService,
    private readonly personService: PersonService
  ) {}

  clear(): void {
    this.buildingService.clearBuildingsRooms();
    this.roomService.clear();
  }
}
