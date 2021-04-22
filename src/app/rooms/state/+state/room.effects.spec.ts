import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { RoomStorage } from '@app/rooms/storage';

import { ROOM_LOAD_ERROR, ROOMS_STUB } from '../testing/room.stub';
import * as RoomActions from './room.actions';
import { RoomEffects } from './room.effects';
import { ROOM_FEATURE_KEY, roomInitialState } from './room.reducer';

describe('RoomEffects', () => {
  let actions$: Observable<any>;
  let effects: RoomEffects;
  let storage: RoomStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoomEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { [ROOM_FEATURE_KEY]: roomInitialState },
        }),
        {
          provide: RoomStorage,
          useValue: {} as Partial<RoomStorage>,
        },
      ],
    });

    effects = TestBed.inject(RoomEffects);
    storage = TestBed.inject(RoomStorage);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadRooms$', () => {
    it('should return signed in', () => {
      const action = RoomActions.loadRooms();
      const completion = RoomActions.loadRoomsSuccess({ payload: ROOMS_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a-|', { a: ROOMS_STUB });
      storage.get = jest.fn(() => response);
      const expected = cold('--a-|', { a: completion });

      expect(effects.loadRooms$).toBeObservable(expected);
    });

    it('should return sign in error', () => {
      const action = RoomActions.loadRooms();
      const completion = RoomActions.loadRoomsFailure({ payload: ROOM_LOAD_ERROR });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, ROOM_LOAD_ERROR);
      const expected = cold('--a|', { a: completion });
      storage.get = jest.fn(() => response);

      expect(effects.loadRooms$).toBeObservable(expected);
    });
  });
});
