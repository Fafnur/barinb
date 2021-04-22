import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Room } from '@app/rooms/common';
import { RoomFacade } from '@app/rooms/state';

@Injectable()
export class RoomService {
  rooms$: Observable<Room[]> = this.roomFacade.rooms$.pipe(filter<any>(Boolean));

  constructor(private readonly roomFacade: RoomFacade) {}
}
