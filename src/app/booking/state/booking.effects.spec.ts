import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
// import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

// import * as BookingActions from './booking.actions';
import { BookingEffects } from './booking.effects';
import { BOOKING_FEATURE_KEY, bookingInitialState } from './booking.reducer';
// import { ROOM_STUB } from './booking.stub';

describe('BookingEffects', () => {
  let actions$: Observable<any>;
  let effects: BookingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookingEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { [BOOKING_FEATURE_KEY]: bookingInitialState },
        }),
      ],
    });

    effects = TestBed.inject(BookingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  // describe('loadRooms$', () => {
  //   it('should return load rooms success', () => {
  //     const action = RoomActions.loadRooms();
  //     const completion = RoomActions.loadRoomsSuccess({ payload: ROOMS_STUB });
  //
  //     actions$ = hot('-a-|', { a: action });
  //     const response = cold('-a-|', { a: ROOMS_STUB });
  //     storage.get = jest.fn(() => response);
  //     const expected = cold('--a-|', { a: completion });
  //
  //     expect(effects.loadRooms$).toBeObservable(expected);
  //   });
  //
  //   it('should return load rooms failure', () => {
  //     const action = RoomActions.loadRooms();
  //     const completion = RoomActions.loadRoomsFailure({ payload: ROOM_LOAD_ERROR });
  //
  //     actions$ = hot('-a-|', { a: action });
  //     const response = cold('-#|', {}, ROOM_LOAD_ERROR);
  //     const expected = cold('--a|', { a: completion });
  //     storage.get = jest.fn(() => response);
  //
  //     expect(effects.loadRooms$).toBeObservable(expected);
  //   });
  // });
});
