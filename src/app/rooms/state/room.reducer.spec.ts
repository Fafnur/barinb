import { createState } from '@app/core/store/utils';

import * as RoomActions from './room.actions';
import { reducer, roomInitialState, RoomState } from './room.reducer';
import { ROOM_LOAD_ERROR, ROOMS_STUB } from './room.stub';

describe('Room Reducer', () => {
  const getState = (payload?: Partial<RoomState>): RoomState => createState(roomInitialState, payload);

  it('loadRooms() should clear roomsLoadError', () => {
    const state = getState({ roomsLoadError: ROOM_LOAD_ERROR });
    const action = RoomActions.loadRooms();
    const result = reducer(state, action);

    expect(result.roomsLoadError).toBeNull();
  });

  it('loadRoomsSuccess() should set rooms', () => {
    const state = getState();
    const action = RoomActions.loadRoomsSuccess({ payload: ROOMS_STUB });
    const result = reducer(state, action);

    expect(result.rooms?.length).toBe(ROOMS_STUB.length);
  });

  it('loadRoomsSuccess() should set roomsLoadError', () => {
    const state = getState();
    const action = RoomActions.loadRoomsFailure({ payload: ROOM_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.roomsLoadError).toEqual(ROOM_LOAD_ERROR);
  });

  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(roomInitialState, action);

    expect(result).toBe(roomInitialState);
  });
});
