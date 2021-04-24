import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { fetch } from '@app/core/store/utils';
import { PersonStorage } from '@app/persons/storage';

import * as PersonActions from './person.actions';

@Injectable()
export class PersonEffects implements OnInitEffects {
  loadPersons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.loadPersons),
      fetch({
        id: () => 'load-buildings',
        run: () => this.personStorage.get().pipe(map((payload) => PersonActions.loadPersonsSuccess({ payload }))),
        onError: (action, payload) => PersonActions.loadPersonsFailure({ payload }),
      })
    )
  );

  constructor(private readonly actions$: Actions, private readonly personStorage: PersonStorage) {}

  ngrxOnInitEffects(): Action {
    return PersonActions.loadPersons();
  }
}
