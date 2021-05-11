import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { NavigationPath } from '@app/core/navigation/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private readonly router: Router) {}

  getRoute(navigationPath: NavigationPath, params?: Record<string, string | number | undefined>): (string | number)[] {
    const segments = navigationPath.split('/');
    const routeWithParams: (string | number)[] = ['/'];
    for (const segment of segments) {
      if (segment.length) {
        if (segment.charAt(0) === ':') {
          const paramName = segment.slice(1);
          if (params && params[paramName]) {
            routeWithParams.push(params[paramName] ?? '');
          } else {
            routeWithParams.push(paramName);
          }
        } else {
          routeWithParams.push(segment);
        }
      }
    }

    return routeWithParams;
  }

  navigate(
    navigationPath: NavigationPath,
    params?: Record<string, string | number | undefined>,
    extras?: NavigationExtras
  ): Promise<boolean> {
    return this.router.navigate(this.getRoute(navigationPath, params), extras);
  }
}
