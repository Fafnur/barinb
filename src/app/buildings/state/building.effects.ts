import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';

import { createBuildingFromNewBuilding } from '@app/buildings/common';
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
          buildings
            ? BuildingActions.clearBuildingsRoomsSuccess({
                payload: buildings?.map((building) => ({ ...building, rooms: [] })) ?? null,
              })
            : BuildingActions.clearBuildingsRoomsCancel(),
        onError: (action, payload) => BuildingActions.clearBuildingsRoomsFailure({ payload }),
      })
    )
  );

  removeRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.removeBuilding),
      withLatestFrom(this.store.pipe(select(BuildingSelectors.selectBuildingsEntities))),
      fetch({
        id: (action) => `remove-room-${action.payload.id}`,
        run: (action, roomsEntities) => {
          const room = roomsEntities ? roomsEntities[action.payload.id] : null;

          return room ? BuildingActions.removeBuildingSuccess({ payload: action.payload }) : BuildingActions.removeBuildingCancel();
        },
        onError: (action, error) => BuildingActions.removeBuildingFailure({ payload: { ...error, id: action.payload.id } }),
      })
    )
  );

  addBuilding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.addBuilding),
      withLatestFrom(this.store.pipe(select(BuildingSelectors.selectBuildings))),
      fetch({
        id: () => 'add-building',
        run: (action, buildings) =>
          BuildingActions.addBuildingSuccess({ payload: createBuildingFromNewBuilding(buildings ?? [], action.payload) }),
        onError: (action, payload) => BuildingActions.addBuildingFailure({ payload }),
      })
    )
  );

  changeBuilding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.changeBuilding),
      fetch({
        id: () => 'change-building',
        run: (action) => BuildingActions.changeBuildingSuccess({ payload: action.payload }),
        onError: (action, payload) => BuildingActions.changeBuildingFailure({ payload }),
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
