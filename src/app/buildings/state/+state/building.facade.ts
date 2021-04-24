import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import * as BuildingActions from './building.actions';
import { BuildingState } from './building.reducer';
import * as BuildingSelectors from './building.selectors';

@Injectable()
export class BuildingFacade {
  buildings$ = this.store.pipe(select(BuildingSelectors.selectBuildings));

  buildingsLoadError$ = this.store.pipe(select(BuildingSelectors.selectBuildingsLoadError));

  constructor(private readonly store: Store<BuildingState>) {}

  loadBuildings(): void {
    this.dispatch(BuildingActions.loadBuildings());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
