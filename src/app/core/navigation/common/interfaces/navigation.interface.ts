export enum NavigationPath {
  Home = '',
  Rooms = 'rooms',
  Buildings = 'buildings',
  Persons = 'persons',
  RoomPage = 'rooms/:id',
  /**
   * NOTICE: Maybe it's need to remove
   */
  NotFoundPage = 'not-found',
  Admin = 'admin',
  AdminRoomsPage = 'admin/rooms',
  AdminRoomPage = 'admin/rooms/:id',
  AdminBuildingsPage = 'admin/buildings',
  AdminBuildingPage = 'admin/buildings/:id',
  AdminPersonsPage = 'admin/persons',
  AdminPersonPage = 'admin/persons/:id',
}

export interface NavigationLink {
  route: NavigationPath;
  label: string;
  params?: Record<string, any>;
}
