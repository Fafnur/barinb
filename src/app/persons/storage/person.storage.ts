import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorage } from '@app/core/storage';
import { Person } from '@app/persons/common';

import { PERSONS_STUB } from './person.stub';

const PERSON_STORAGE_KEY = 'persons';

@Injectable()
export class PersonStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear(): void {
    this.localStorage.setItem(PERSON_STORAGE_KEY, []);
  }

  get(): Observable<Person[]> {
    return this.localStorage.getItem<Person[] | null>(PERSON_STORAGE_KEY).pipe(map((persons) => persons ?? PERSONS_STUB));
  }

  post(rooms: Person[] | null): void {
    this.localStorage.setItem(PERSON_STORAGE_KEY, rooms);
  }

  reset(): void {
    this.localStorage.setItem(PERSON_STORAGE_KEY, PERSONS_STUB);
  }
}
