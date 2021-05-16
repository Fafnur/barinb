import { NewRoom, RoomEntity } from '../interfaces/room.interface';

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
    roomRemoveRun: false,
    roomRemoveError: null,
    created,
    updated: created,
  };
}
