import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { RoomStorage } from '@app/rooms/storage';

import * as RoomActions from './room.actions';
import { RoomEffects } from './room.effects';
import { ROOM_FEATURE_KEY, roomInitialState } from './room.reducer';
import { ROOM_LOAD_ERROR, ROOMS_STUB } from './room.stub';

describe('RoomEffects', () => {
  let actions$: Observable<any>;
  let effects: RoomEffects;
  let storage: RoomStorage;
  // let store: Store;

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
    // store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadRooms$', () => {
    it('should return load rooms success', () => {
      const action = RoomActions.loadRooms();
      const completion = RoomActions.loadRoomsSuccess({ payload: ROOMS_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a-|', { a: ROOMS_STUB });
      storage.get = jest.fn(() => response);
      const expected = cold('--a-|', { a: completion });

      expect(effects.loadRooms$).toBeObservable(expected);
    });

    it('should return load rooms failure', () => {
      const action = RoomActions.loadRooms();
      const completion = RoomActions.loadRoomsFailure({ payload: ROOM_LOAD_ERROR });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, ROOM_LOAD_ERROR);
      const expected = cold('--a|', { a: completion });
      storage.get = jest.fn(() => response);

      expect(effects.loadRooms$).toBeObservable(expected);
    });
  });

  // describe('addRoom$', () => {
  //   it('should return load rooms success', () => {
  //     const action = RoomActions.addRoom({ payload: NEW_ROOM_STUB });
  //     const completion = RoomActions.addRoomSuccess({ payload: createRoomFromNewRoom([], NEW_ROOM_STUB) });
  //
  //     actions$ = hot('-a-|', { a: action });
  //     const expected = cold('-a-|', { a: completion });
  //
  //     expect(effects.addRoom$).toBeObservable(expected);
  //   });
  //
  //   it('should return load rooms failure', () => {
  //     const action = RoomActions.addRoom({ payload: NEW_ROOM_STUB });
  //     const completion = RoomActions.addRoomFailure({ payload: ROOM_LOAD_ERROR });
  //
  //     actions$ = hot('-a-|', { a: action });
  //     const expected = cold('--a|', { a: completion });
  //
  //     expect(effects.addRoom$).toBeObservable(expected);
  //   });
  // });

  // describe('removeRoom$', () => {
  //   it('should return load rooms success', () => {
  //     const action = RoomActions.removeRoom({ payload: ENTITY_STUB });
  //     const completion = RoomActions.removeRoomSuccess({ payload: ENTITY_STUB });
  //
  //     actions$ = hot('-a-|', { a: action });
  //     const expected = cold('--a-|', { a: completion });
  //
  //     expect(effects.removeRoom$).toBeObservable(expected);
  //   });
  //
  //   it('should return load rooms failure', () => {
  //     const action = RoomActions.removeRoom({ payload: ENTITY_STUB });
  //     const completion = RoomActions.removeRoomFailure({ payload: { ...ROOM_LOAD_ERROR, ...ENTITY_STUB } });
  //
  //     actions$ = hot('-a-|', { a: action });
  //     const expected = cold('--a|', { a: completion });
  //
  //     expect(effects.removeRoom$).toBeObservable(expected);
  //   });
  // });
});
