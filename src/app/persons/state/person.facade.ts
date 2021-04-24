import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from '@app/persons/common';

import * as PersonActions from './person.actions';
import { PersonState } from './person.reducer';
import * as PersonSelectors from './person.selectors';

@Injectable()
export class PersonFacade {
  persons$ = this.store.pipe(select(PersonSelectors.selectPersons));

  personLoadError$ = this.store.pipe(select(PersonSelectors.selectPersonsLoadError));

  person$ = (id: number): Observable<Person | null> => this.store.pipe(select(PersonSelectors.selectPerson, { id }));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly store: Store<PersonState>) {}

  load(): void {
    this.dispatch(PersonActions.loadPersons());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
