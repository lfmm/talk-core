import { ActionReducerMap, createSelector, MemoizedSelector } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface RouterState {
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export class CoreRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    // Only return an object including the URL and query params
    // instead of the entire snapshot
    return { url, queryParams };
  }
}

export const routerStateReducers: ActionReducerMap<RouterState> = {
  routerReducer: routerReducer
};

export const getRouterState = (state: any) => {
  if (state && state.RouterState) { return state.RouterState; } else { return null; }
};

export const getRouterStateReducer = createSelector(getRouterState,
  (state: RouterState) => state ? state.routerReducer : null);

export const getRouterStateUrl = createSelector(getRouterStateReducer,
  (state: RouterReducerState<RouterStateUrl>) => state ? state.state : null);
