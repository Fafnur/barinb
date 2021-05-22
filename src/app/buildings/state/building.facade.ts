import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Building, ChangedBuilding, NewBuilding } from '@app/buildings/common';
import { Entity } from '@app/core/common';

import * as BuildingActions from './building.actions';
import { BuildingState } from './building.reducer';
import * as BuildingSelectors from './building.selectors';

@Injectable()
export class BuildingFacade {
  buildings$: Observable<Building[]> = this.store.pipe(select(BuildingSelectors.selectBuildings));

  buildingsLoadError$ = this.store.pipe(select(BuildingSelectors.selectBuildingsLoadError));

  buildingsLoadRun$ = this.store.pipe(select(BuildingSelectors.selectBuildingsLoadRun));

  building$ = (id: number): Observable<Building | null> => this.store.pipe(select(BuildingSelectors.selectBuilding({ id })));

  buildingsByPerson$ = (id: number): Observable<Building[] | null> =>
    this.store.pipe(select(BuildingSelectors.selectBuildingsByPerson({ id })));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly store: Store<BuildingState>) {}

  clear(): void {
    this.dispatch(BuildingActions.clearBuildings());
  }

  clearBuildingsRooms(): void {
    this.dispatch(BuildingActions.clearBuildingsRooms());
  }

  load(): void {
    this.dispatch(BuildingActions.loadBuildings());
  }

  removeBuilding(payload: Entity): void {
    this.dispatch(BuildingActions.removeBuilding({ payload }));
  }

  addBuilding(payload: NewBuilding): void {
    this.dispatch(BuildingActions.addBuilding({ payload }));
  }

  changeBuilding(payload: ChangedBuilding): void {
    this.dispatch(BuildingActions.changeBuilding({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
