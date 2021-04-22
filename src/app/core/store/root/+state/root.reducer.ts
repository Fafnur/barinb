import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RouterUrlState } from '../interfaces/router-url-state.interface';

export interface RootState {
  router: RouterReducerState<RouterUrlState> | null;
}

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
};

export const rootInitialState: RootState = {
  router: null,
};
