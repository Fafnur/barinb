import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RoomStorageModule } from '@app/rooms/storage';

import { RoomEffects } from './room.effects';
import { RoomFacade } from './room.facade';
import { reducer, ROOM_FEATURE_KEY } from './room.reducer';

@NgModule({
  imports: [RoomStorageModule, StoreModule.forFeature(ROOM_FEATURE_KEY, reducer), EffectsModule.forFeature([RoomEffects])],
  providers: [RoomFacade],
})
export class RoomStateModule {}
