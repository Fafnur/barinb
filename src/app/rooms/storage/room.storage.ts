import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorage } from '@app/core/storage';
import { RoomDto, RoomEntity } from '@app/rooms/common';

import { ROOMS_DTO_STUB } from './room.stub';

const ROOMS_STORAGE_KEY = 'rooms';

export function castRoomEntity(room: RoomDto): RoomEntity {
  return {
    ...room,
    roomRemoveRun: false,
    roomRemoveError: null,
    roomChangeRun: false,
    roomChangeError: null,
  };
}

export function castRoomDto<T extends RoomEntity = RoomEntity>({
  id,
  created,
  updated,
  building,
  guests,
  bedrooms,
  bathrooms,
  beds,
  price,
  description,
  photos,
  amenities,
}: T): RoomDto {
  return {
    id,
    created,
    updated,
    building,
    guests,
    bedrooms,
    bathrooms,
    beds,
    price,
    description,
    photos,
    amenities,
  };
}

@Injectable()
export class RoomStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, []);
  }

  get(): Observable<RoomEntity[]> {
    return this.localStorage
      .getItem<RoomDto[] | null>(ROOMS_STORAGE_KEY)
      .pipe(map((rooms) => (rooms ?? ROOMS_DTO_STUB).map(castRoomEntity)));
  }

  post(rooms: RoomEntity[] | null): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, rooms?.map(castRoomDto));
  }

  reset(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, ROOMS_DTO_STUB);
  }
}
