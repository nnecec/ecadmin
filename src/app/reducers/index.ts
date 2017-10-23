import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import * as routerStore from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as account from '../+account/reducer';
import { RouterStateUrl } from '../utils';

export interface State {
  count: account.State;
  routerReducer: routerStore.RouterReducerState<RouterStateUrl>;
}

// combine multi reducers
export const reducers: ActionReducerMap<State> = {
  count: account.reducer,
  routerReducer: routerStore.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
