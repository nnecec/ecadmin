import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store'
import {
  routerReducer,
  RouterReducerState
} from '@ngrx/router-store'

// config
import { environment } from '../../environments/environment'
import { RouterStateUrl } from '../utils/router-store'

// import reducer
import accountReducer from './account.reducer'

export interface State {
  accountReducer: any,
  routerReducer: RouterReducerState<RouterStateUrl>
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
  routerReducer: routerReducer,
  accountReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : []
