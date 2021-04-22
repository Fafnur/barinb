import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterUrlState } from '../interfaces/router-url-state.interface';

/**
 * @see https://ngrx.io/guide/router-store/configuration
 */
@Injectable()
export class RootRouterStateSerializer implements RouterStateSerializer<RouterUrlState> {
  serialize(routerState: RouterStateSnapshot): RouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params, data } = route;

    return { url, params, queryParams, data };
  }
}
