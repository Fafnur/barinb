import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { fetch } from '@app/core/store/utils';
import { PersonStorage } from '@app/persons/storage';

import * as BuildingActions from './person.actions';

@Injectable()
export class PersonEffects implements OnInitEffects {
  loadPersons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.loadPersons),
      fetch({
        id: () => 'load-buildings',
        run: () => this.personStorage.get().pipe(map((payload) => BuildingActions.loadPersonsSuccess({ payload }))),
        onError: (action, payload) => BuildingActions.loadPersonsFailure({ payload }),
      })
    )
  );

  constructor(private readonly actions$: Actions, private readonly personStorage: PersonStorage) {}

  ngrxOnInitEffects(): Action {
    return BuildingActions.loadPersons();
  }
}
