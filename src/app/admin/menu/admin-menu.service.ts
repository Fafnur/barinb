import { Injectable } from '@angular/core';

import { NavigationLink, NavigationPath } from '@app/core/navigation/common';

export const ADMIN_MENU_LINKS: NavigationLink[] = [
  {
    route: NavigationPath.AdminRoomsPage,
    label: 'Номера',
  },
  {
    route: NavigationPath.AdminBuildingsPage,
    label: 'Отели',
  },
  {
    route: NavigationPath.AdminPersonsPage,
    label: 'Собственники',
  },
];

@Injectable()
export class AdminMenuService {
  links(): NavigationLink[] {
    return ADMIN_MENU_LINKS;
  }
}
