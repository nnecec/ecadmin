import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store'
import * as routerStore from '@ngrx/router-store'

import { environment } from '../../environments/environment'

import * as account from '../account/reducer'
import { RouterStateUrl } from '../utils'

export interface State {
  count: number
  routerReducer: routerStore.RouterReducerState<RouterStateUrl>
}

// logger
export function logger (reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('%c state ', 'color: #fff;background: #f00; ', state)
    console.log('%c action ', 'color: #fff;background: #00f; ', action)

    return reducer(state, action)
  }
}

// combine multi reducers
export const reducers: ActionReducerMap<State> = {
  count: account.reducer,
  routerReducer: routerStore.routerReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : []
