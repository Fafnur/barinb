import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { readFirst } from '@app/core/store/utils';

import { BookingEffects } from './booking.effects';
import { BookingFacade } from './booking.facade';
import { BOOKING_FEATURE_KEY, reducer } from './booking.reducer';
import { ROOM_STUB } from './booking.stub';

describe('BookingFacade', () => {
  let facade: BookingFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(BOOKING_FEATURE_KEY, reducer), EffectsModule.forFeature([BookingEffects])],
        providers: [BookingFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(BookingFacade);
    });

    it('setRoom() should set room', async (done) => {
      try {
        facade.setRoom(ROOM_STUB);

        const room = await readFirst(facade.room$);
        expect(room).toEqual(ROOM_STUB);

        done();
      } catch (error) {
        done.fail(error);
      }
    });
  });
});
