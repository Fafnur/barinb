import { Injectable } from '@angular/core';

import { NavigationLink, NavigationPath } from '@app/core/navigation/common';

@Injectable()
export class AdminMenuService {
  links(): NavigationLink[] {
    return [
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
  }
}
