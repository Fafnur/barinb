import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { BuildingStorage } from '@app/buildings/storage';
import { fetch } from '@app/core/store/utils';

import * as BuildingActions from './building.actions';

@Injectable()
export class BuildingEffects {
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
}
