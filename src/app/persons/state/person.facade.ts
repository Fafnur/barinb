import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Entity } from '@app/core/common';
import { ChangedPerson, ChangePersonBuilding, NewPerson, Person } from '@app/persons/common';

import * as PersonActions from './person.actions';
import { PersonState } from './person.reducer';
import * as PersonSelectors from './person.selectors';

@Injectable()
export class PersonFacade {
  persons$: Observable<Person[]> = this.store.pipe(select(PersonSelectors.selectPersons));

  personsLoadError$ = this.store.pipe(select(PersonSelectors.selectPersonsLoadError));

  personsLoadRun$ = this.store.pipe(select(PersonSelectors.selectPersonsLoadRun));

  personAdded$: Observable<Person> = this.actions.pipe(
    ofType(PersonActions.addPersonSuccess),
    map((action) => action.payload)
  );

  personChanged$ = this.actions.pipe(
    ofType(PersonActions.changePersonSuccess),
    map((action) => action.payload)
  );

  person$ = (id: number): Observable<Person | null> => this.store.pipe(select(PersonSelectors.selectPerson({ id })));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly actions: Actions, private readonly store: Store<PersonState>) {}

  clear(): void {
    this.dispatch(PersonActions.clearPersons());
  }

  clearPersonsBuildings(): void {
    this.dispatch(PersonActions.clearPersonsBuildings());
  }

  load(): void {
    this.dispatch(PersonActions.loadPersons());
  }

  removePerson(payload: Entity): void {
    this.dispatch(PersonActions.removePerson({ payload }));
  }

  removePersonBuilding(payload: ChangePersonBuilding): void {
    this.dispatch(PersonActions.removePersonBuilding({ payload }));
  }

  addPersonBuilding(payload: ChangePersonBuilding): void {
    this.dispatch(PersonActions.addPersonBuilding({ payload }));
  }

  addPerson(payload: NewPerson): void {
    this.dispatch(PersonActions.addPerson({ payload }));
  }

  changePerson(payload: ChangedPerson): void {
    this.dispatch(PersonActions.changePerson({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
