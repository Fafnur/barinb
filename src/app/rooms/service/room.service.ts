import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Entity } from '@app/core/common';
import { Room } from '@app/rooms/common';
import { RoomFacade } from '@app/rooms/state';

@Injectable()
export class RoomService {
  rooms$: Observable<Room[]> = this.roomFacade.rooms$.pipe(filter<any>((value) => value != null));

  room$ = (id: number): Observable<Room> => this.roomFacade.room$(id).pipe(filter<any>(Boolean));

  roomsByBuilding$ = (id: number): Observable<Room> => this.roomFacade.roomsByBuilding$(id).pipe(filter<any>(Boolean));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly roomFacade: RoomFacade) {}

  clear(): void {
    this.roomFacade.clear();
  }

  removeRoom(payload: Entity): void {
    this.roomFacade.removeRoom(payload);
  }
}
