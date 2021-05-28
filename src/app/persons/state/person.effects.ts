import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';

import { fetch } from '@app/core/store/utils';
import { createPersonFromNewPerson } from '@app/persons/common';
import { PersonStorage } from '@app/persons/storage';

import * as PersonActions from './person.actions';
import * as PersonSelectors from './person.selectors';

@Injectable()
export class PersonEffects implements OnInitEffects {
  loadPersons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.loadPersons),
      fetch({
        id: () => 'load-persons',
        run: () => this.personStorage.get().pipe(map((payload) => PersonActions.loadPersonsSuccess({ payload }))),
        onError: (action, payload) => PersonActions.loadPersonsFailure({ payload }),
      })
    )
  );

  addPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.addPerson),
      withLatestFrom(this.store.pipe(select(PersonSelectors.selectPersons))),
      fetch({
        id: () => 'add-person',
        run: (action, persons) => PersonActions.addPersonSuccess({ payload: createPersonFromNewPerson(persons ?? [], action.payload) }),
        onError: (action, payload) => PersonActions.addPersonFailure({ payload }),
      })
    )
  );

  removePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.removePerson),
      withLatestFrom(this.store.pipe(select(PersonSelectors.selectPersonsEntities))),
      fetch({
        id: (action) => `remove-person-${action.payload.id}`,
        run: (action, personsEntities) => {
          const person = personsEntities ? personsEntities[action.payload.id] : null;

          return person ? PersonActions.removePersonSuccess({ payload: action.payload }) : PersonActions.removePersonCancel();
        },
        onError: (action, error) => PersonActions.removePersonFailure({ payload: { ...error, id: action.payload.id } }),
      })
    )
  );

  changePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.changePerson),
      fetch({
        id: () => 'change-person',
        run: (action) => PersonActions.changePersonSuccess({ payload: action.payload }),
        onError: (action, payload) => PersonActions.changePersonFailure({ payload }),
      })
    )
  );

  constructor(private readonly actions$: Actions, private readonly store: Store, private readonly personStorage: PersonStorage) {}

  ngrxOnInitEffects(): Action {
    return PersonActions.loadPersons();
  }
}
