import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Building, ChangeBuildingRoom, ChangedBuilding, NewBuilding } from '@app/buildings/common';
import { Entity } from '@app/core/common';

import * as BuildingActions from './building.actions';
import { BuildingState } from './building.reducer';
import * as BuildingSelectors from './building.selectors';

@Injectable()
export class BuildingFacade {
  buildings$: Observable<Building[]> = this.store.pipe(select(BuildingSelectors.selectBuildings));

  buildingsLoadError$ = this.store.pipe(select(BuildingSelectors.selectBuildingsLoadError));

  buildingsLoadRun$ = this.store.pipe(select(BuildingSelectors.selectBuildingsLoadRun));

  buildingAdded$: Observable<Building> = this.actions.pipe(
    ofType(BuildingActions.addBuildingSuccess),
    map((action) => action.payload)
  );

  buildingChanged$: Observable<ChangedBuilding> = this.actions.pipe(
    ofType(BuildingActions.changeBuildingSuccess),
    map((action) => action.payload)
  );

  building$ = (id: number): Observable<Building | null> => this.store.pipe(select(BuildingSelectors.selectBuilding({ id })));

  buildingsByPerson$ = (id: number): Observable<Building[]> => this.store.pipe(select(BuildingSelectors.selectBuildingsByPerson({ id })));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly actions: Actions, private readonly store: Store<BuildingState>) {}

  clear(): void {
    this.dispatch(BuildingActions.clearBuildings());
  }

  clearBuildingsRooms(): void {
    this.dispatch(BuildingActions.clearBuildingsRooms());
  }

  load(): void {
    this.dispatch(BuildingActions.loadBuildings());
  }

  addBuilding(payload: NewBuilding): void {
    this.dispatch(BuildingActions.addBuilding({ payload }));
  }

  removeBuilding(payload: Entity): void {
    this.dispatch(BuildingActions.removeBuilding({ payload }));
  }

  removeBuildings(payload: number[]): void {
    this.dispatch(BuildingActions.removeBuildings({ payload }));
  }

  addBuildingRoom(payload: ChangeBuildingRoom): void {
    this.dispatch(BuildingActions.addBuildingRoom({ payload }));
  }

  removeBuildingRoom(payload: ChangeBuildingRoom): void {
    this.dispatch(BuildingActions.removeBuildingRoom({ payload }));
  }

  changeBuilding(payload: ChangedBuilding): void {
    this.dispatch(BuildingActions.changeBuilding({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
