import { createEntityState, createState } from '@app/core/store/utils';
import { RoomEntity } from '@app/rooms/common';

import * as RoomActions from './room.actions';
import { reducer, roomInitialState, RoomState } from './room.reducer';
import { ENTITY_STUB, NEW_ROOM_STUB, ROOM_LOAD_ERROR, ROOM_STUB, ROOMS_STUB } from './room.stub';

describe('RoomReducer', () => {
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

    expect(Object.keys(result.entities).length).toBe(ROOMS_STUB.length);
  });

  it('loadRoomsFailure() should set roomsLoadError', () => {
    const state = getState();
    const action = RoomActions.loadRoomsFailure({ payload: ROOM_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.roomsLoadError).toEqual(ROOM_LOAD_ERROR);
  });

  it('clearRooms() should clears rooms', () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const action = RoomActions.clearRooms();
    const result = reducer(state, action);

    expect(result.ids.length).toBe(0);
  });

  it('removeRoom() should clear roomsLoadError', () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const action = RoomActions.removeRoom({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as RoomEntity;

    expect(entity.roomRemoveRun).toBeTruthy();
  });

  it('removeRoomFailure() should set roomRemoveError', () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const payload = { ...ROOM_LOAD_ERROR, ...ENTITY_STUB };
    const action = RoomActions.removeRoomFailure({ payload });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as RoomEntity;

    expect(entity.roomRemoveError).toEqual(payload);
  });

  it('addRoom() should set roomCreateRun true', () => {
    const state = getState();
    const action = RoomActions.addRoom({ payload: NEW_ROOM_STUB });
    const result = reducer(state, action);

    expect(result.roomCreateRun).toBeTruthy();
  });

  it('addRoomSuccess() should add rooms', () => {
    const state = getState({ roomCreateRun: true });
    const action = RoomActions.addRoomSuccess({ payload: ROOM_STUB });
    const result = reducer(state, action);

    expect(Object.keys(result.entities).length).toBe(1);
  });

  it('addRoomFailure() should set roomCreateError', () => {
    const state = getState();
    const action = RoomActions.addRoomFailure({ payload: ROOM_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.roomCreateError).toEqual(ROOM_LOAD_ERROR);
  });

  it('changeRoom() should clear roomsLoadError', () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const action = RoomActions.changeRoom({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as RoomEntity;

    expect(entity.roomChangeRun).toBeTruthy();
  });

  it('changeRoomSuccess() should clear roomsLoadError', () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const action = RoomActions.changeRoomSuccess({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as RoomEntity;

    expect(entity.roomChangeRun).toBeFalsy();
  });

  it('changeRoomFailure() should set roomRemoveError', () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const payload = { ...ROOM_LOAD_ERROR, ...ENTITY_STUB };
    const action = RoomActions.changeRoomFailure({ payload });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as RoomEntity;

    expect(entity.roomChangeError).toEqual(payload);
  });

  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(roomInitialState, action);

    expect(result).toBe(roomInitialState);
  });
});
