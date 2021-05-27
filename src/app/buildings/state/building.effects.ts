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

  removeBuilding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.removeBuilding),
      withLatestFrom(this.store.pipe(select(BuildingSelectors.selectBuildingsEntities))),
      fetch({
        id: (action) => `remove-buiding-${action.payload.id}`,
        run: (action, buildingsEntities) => {
          const building = buildingsEntities ? buildingsEntities[action.payload.id] : null;

          return building ? BuildingActions.removeBuildingSuccess({ payload: action.payload }) : BuildingActions.removeBuildingCancel();
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

  removeBuildingRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.removeBuildingRoom),
      withLatestFrom(this.store.pipe(select(BuildingSelectors.selectBuildingsEntities))),
      fetch({
        id: () => 'change-building',
        run: (action, buildingsEntities) => {
          const building = buildingsEntities ? buildingsEntities[action.payload.id] : null;
          const rooms = building?.rooms.filter((room) => room !== action.payload.room) ?? [];

          return BuildingActions.removeBuildingRoomSuccess({ payload: { id: action.payload.id, rooms } });
        },
        onError: (action, payload) => BuildingActions.removeBuildingRoomFailure({ payload: { ...payload, id: action.payload } }),
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
