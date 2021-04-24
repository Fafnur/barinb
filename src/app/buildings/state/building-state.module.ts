import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BuildingStorageModule } from '@app/buildings/storage';

import { BuildingEffects } from './+state/building.effects';
import { BuildingFacade } from './+state/building.facade';
import { BUILDING_FEATURE_KEY, reducer } from './+state/building.reducer';

@NgModule({
  imports: [BuildingStorageModule, StoreModule.forFeature(BUILDING_FEATURE_KEY, reducer), EffectsModule.forFeature([BuildingEffects])],
  providers: [BuildingFacade],
})
export class BuildingStateModule {}
