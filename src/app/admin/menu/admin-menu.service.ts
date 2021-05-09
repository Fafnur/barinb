import { Injectable } from '@angular/core';

import { NavigationLink, NavigationPath } from '@app/core/navigation/common';

@Injectable()
export class AdminMenuService {
  links(): NavigationLink[] {
    return [
      {
        route: NavigationPath.AdminRoomsPage,
        label: 'Квартиры',
      },
      {
        route: NavigationPath.AdminBuildingsPage,
        label: 'Дома',
      },
      {
        route: NavigationPath.AdminPersonsPage,
        label: 'Хозяева',
      },
    ];
  }
}
