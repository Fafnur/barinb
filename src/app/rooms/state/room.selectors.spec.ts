import { createStore } from '@app/core/store/utils';

import { ROOM_FEATURE_KEY, roomInitialState, RoomPartialState, RoomState } from './room.reducer';
import * as RoomSelectors from './room.selectors';
import { ROOM_LOAD_ERROR, ROOM_STUB, ROOMS_STUB } from './room.stub';

describe('Room Selectors', () => {
  const getState = (payload: Partial<RoomState>): RoomPartialState => createStore(ROOM_FEATURE_KEY, roomInitialState, payload);

  it('selectRooms() should return rooms', () => {
    const state = getState({ rooms: ROOMS_STUB });
    const results = RoomSelectors.selectRooms(state);

    expect(results?.length).toBe(ROOMS_STUB.length);
  });

  it('selectRoomsLoadError() should return roomsLoadError', () => {
    const state = getState({ roomsLoadError: ROOM_LOAD_ERROR });
    const results = RoomSelectors.selectRoomsLoadError(state);

    expect(results).toEqual(ROOM_LOAD_ERROR);
  });

  it('selectRoom() should return room by id', () => {
    const state = getState({ rooms: ROOMS_STUB });
    const result = RoomSelectors.selectRoom(state, { id: ROOM_STUB.id });

    expect(result).toEqual(ROOM_STUB);
  });

  it('selectRoomsByBuilding() should return rooms by building id', () => {
    const state = getState({ rooms: ROOMS_STUB });
    const results = RoomSelectors.selectRoomsByBuilding(state, { id: ROOM_STUB.building });

    expect(results?.length).toBe(ROOMS_STUB.length);
  });
});
