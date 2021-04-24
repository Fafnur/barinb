import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BuildingStorageModule } from '@app/buildings/storage';

import { PersonEffects } from './person.effects';
import { PersonFacade } from './person.facade';
import { PERSON_FEATURE_KEY, reducer } from './person.reducer';

@NgModule({
  imports: [BuildingStorageModule, StoreModule.forFeature(PERSON_FEATURE_KEY, reducer), EffectsModule.forFeature([PersonEffects])],
  providers: [PersonFacade],
})
export class PersonStateModule {}
