import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorage } from '@app/core/storage';
import { RoomEntity } from '@app/rooms/common';

import { ROOMS_DTO_STUB } from './room.stub';

const ROOMS_STORAGE_KEY = 'rooms';

@Injectable()
export class RoomStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, []);
  }

  get(): Observable<RoomEntity[]> {
    return this.localStorage.getItem<RoomEntity[] | null>(ROOMS_STORAGE_KEY).pipe(
      map(
        (rooms) =>
          rooms ??
          ROOMS_DTO_STUB.map((room) => ({
            ...room,
            roomRemoveRun: false,
            roomRemoveError: null,
          }))
      )
    );
  }

  post(rooms: RoomEntity[]): void {
    this.localStorage.setItem(
      ROOMS_STORAGE_KEY,
      rooms.map((room) => ({ ...room, roomRemoveRun: undefined, roomRemoveError: undefined }))
    );
  }

  reset(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, ROOMS_DTO_STUB);
  }
}
