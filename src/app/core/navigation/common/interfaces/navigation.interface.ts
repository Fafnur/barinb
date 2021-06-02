export enum NavigationPath {
  Home = '',
  Rooms = 'rooms',
  Buildings = 'buildings',
  Persons = 'persons',
  RoomPage = 'rooms/:id',
  Admin = 'admin',
  AdminRoomsPage = 'admin/rooms',
  AdminBuildingsPage = 'admin/buildings',
  AdminPersonsPage = 'admin/persons',
}

export interface NavigationLink {
  route: NavigationPath;
  label: string;
  params?: Record<string, any>;
}
