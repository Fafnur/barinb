import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Building } from '@app/buildings/common';

import * as BuildingActions from './building.actions';
import { BuildingState } from './building.reducer';
import * as BuildingSelectors from './building.selectors';

@Injectable()
export class BuildingFacade {
  buildings$ = this.store.pipe(select(BuildingSelectors.selectBuildings));

  buildingsLoadError$ = this.store.pipe(select(BuildingSelectors.selectBuildingsLoadError));

  building$ = (id: number): Observable<Building | null> => this.store.pipe(select(BuildingSelectors.selectBuilding, { id }));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly store: Store<BuildingState>) {}

  load(): void {
    this.dispatch(BuildingActions.loadBuildings());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
