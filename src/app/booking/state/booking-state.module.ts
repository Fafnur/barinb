import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BookingEffects } from './booking.effects';
import { BookingFacade } from './booking.facade';
import { BOOKING_FEATURE_KEY, reducer } from './booking.reducer';

@NgModule({
  imports: [StoreModule.forFeature(BOOKING_FEATURE_KEY, reducer), EffectsModule.forFeature([BookingEffects])],
  providers: [BookingFacade],
})
export class BookingStateModule {}
