import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { readFirst } from '@app/core/store/utils';
import { RoomStorage } from '@app/rooms/storage';

import { RoomEffects } from './room.effects';
import { RoomFacade } from './room.facade';
import { reducer, ROOM_FEATURE_KEY } from './room.reducer';
import { ROOMS_STUB } from './room.stub';

describe('RoomFacade', () => {
  let facade: RoomFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(ROOM_FEATURE_KEY, reducer), EffectsModule.forFeature([RoomEffects])],
        providers: [
          RoomFacade,
          {
            provide: RoomStorage,
            useValue: {
              get: jest.fn(() => of(ROOMS_STUB)),
            } as Partial<RoomStorage>,
          },
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(RoomFacade);
    });

    it('loadRooms() should load rooms', async (done) => {
      try {
        facade.load();

        const rooms = await readFirst(facade.rooms$);
        expect(rooms?.length).toBe(ROOMS_STUB.length);

        done();
      } catch (error) {
        done.fail(error);
      }
    });
  });
});
