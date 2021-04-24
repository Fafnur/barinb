import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { BuildingStorage } from '@app/buildings/storage';
import { fetch } from '@app/core/store/utils';

import * as BuildingActions from './building.actions';

@Injectable()
export class BuildingEffects implements OnInitEffects {
  loadBuildings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.loadBuildings),
      fetch({
        id: () => 'load-buildings',
        run: () => this.buildingStorage.get().pipe(map((payload) => BuildingActions.loadBuildingsSuccess({ payload }))),
        onError: (action, payload) => BuildingActions.loadBuildingsFailure({ payload }),
      })
    )
  );

  constructor(private readonly actions$: Actions, private readonly buildingStorage: BuildingStorage) {}

  ngrxOnInitEffects(): Action {
    return BuildingActions.loadBuildings();
  }
}
