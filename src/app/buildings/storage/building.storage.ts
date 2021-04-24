import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Building } from '@app/buildings/common';
import { LocalStorage } from '@app/core/storage';

import { BUILDINGS_STUB } from './building.stub';

const BUILDING_STORAGE_KEY = 'buildings';

@Injectable()
export class BuildingStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear(): void {
    this.localStorage.setItem(BUILDING_STORAGE_KEY, []);
  }

  get(): Observable<Building[]> {
    return this.localStorage.getItem<Building[] | null>(BUILDING_STORAGE_KEY).pipe(map((buildings) => buildings ?? BUILDINGS_STUB));
  }

  post(rooms: Building[] | null): void {
    this.localStorage.setItem(BUILDING_STORAGE_KEY, rooms);
  }

  reset(): void {
    this.localStorage.setItem(BUILDING_STORAGE_KEY, BUILDINGS_STUB);
  }
}
