import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import * as routerStore from '@ngrx/router-store';

import * as account from '../+account/reducer';
import { RouterStateUrl } from '../utils';

export interface State {
  count: number;
  routerReducer: routerStore.RouterReducerState<RouterStateUrl>;
}

// logger
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

// combine multi reducers
export const reducers: ActionReducerMap<State> = {
  count: account.reducer,
  routerReducer: routerStore.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = [logger];

