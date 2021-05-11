import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';

import { BuildingStorage } from '@app/buildings/storage';
import { fetch } from '@app/core/store/utils';

import * as BuildingActions from './building.actions';
import { BuildingState } from './building.reducer';
import * as BuildingSelectors from './building.selectors';

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

  clearBuildingsRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.clearBuildingsRooms),
      withLatestFrom(this.store.pipe(select(BuildingSelectors.selectBuildings))),
      fetch({
        id: () => 'load-buildings',
        run: (action, buildings) =>
          BuildingActions.clearBuildingsRoomsSuccess({
            payload: buildings?.map((building) => ({ ...building, rooms: [] })) ?? null,
          }),
        onError: (action, payload) => BuildingActions.clearBuildingsRoomsFailure({ payload }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<BuildingState>,
    private readonly buildingStorage: BuildingStorage
  ) {}

  ngrxOnInitEffects(): Action {
    return BuildingActions.loadBuildings();
  }
}
