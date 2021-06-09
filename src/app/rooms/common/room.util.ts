import { NewRoom, RoomEntity } from './room.interface';

export function createRoomFromNewRoom(rooms: RoomEntity[], newRoom: NewRoom): RoomEntity {
  let lastId = 1;
  rooms?.forEach((room) => {
    if (room.id > lastId) {
      lastId = room.id;
    }
  });
  const created = new Date().toISOString();

  return {
    ...newRoom,
    id: lastId + 1,
    created,
    updated: created,

    roomRemoveRun: false,
    roomRemoveError: null,
    roomChangeError: null,
    roomChangeRun: false,
  };
}
