import { Injectable } from '@angular/core';
import { NavigationExtras, Router, UrlCreationOptions, UrlTree } from '@angular/router';

import { NavigationPath } from '@app/core/navigation/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private readonly router: Router) {}

  createUrlTree(path: NavigationPath | (string | number)[], navigationExtras?: UrlCreationOptions): UrlTree {
    return this.router.createUrlTree(typeof path === 'string' ? this.getRoute(path) : path, navigationExtras);
  }

  getRoute(navigationPath: NavigationPath, params: Record<string, any> = {}): (string | number)[] {
    const segments = navigationPath.split('/').filter((value) => value?.length);
    const routeWithParams: (string | number)[] = ['/'];

    for (const segment of segments) {
      if (segment.charAt(0) === ':') {
        const paramName = segment.slice(1);
        if (params && params[paramName]) {
          routeWithParams.push(params[paramName]);
        } else {
          routeWithParams.push(paramName);
        }
      } else {
        routeWithParams.push(segment);
      }
    }

    return routeWithParams;
  }

  navigate(navigationPath: (string | number)[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(navigationPath, extras);
  }

  navigateByUrl(navigationPath: NavigationPath, params?: Record<string, any>, extras?: NavigationExtras): Promise<boolean> {
    return this.navigate(this.getRoute(navigationPath, params), extras);
  }
}
