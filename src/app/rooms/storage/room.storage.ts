import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorage } from '@app/core/storage';
import { Room } from '@app/rooms/common';

import { ROOMS_STUB } from './room.stub';

const ROOMS_STORAGE_KEY = 'rooms';

@Injectable()
export class RoomStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, []);
  }

  get(): Observable<Room[]> {
    return this.localStorage.getItem<Room[] | null>(ROOMS_STORAGE_KEY).pipe(map((rooms) => rooms ?? ROOMS_STUB));
  }

  post(rooms: Room[] | null): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, rooms);
  }

  reset(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, ROOMS_STUB);
  }
}
