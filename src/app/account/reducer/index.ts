import { createSelector, createFeatureSelector } from '@ngrx/store'

import { LoginActionTypes, LoginActions } from '../action'

export interface LoginState {
  user: object
}

const initialState = {
  user: {}
}

export type Action = LoginActions

export function loginReducer (state: LoginState = initialState, action: LoginActions) {
  switch (action.type) {
    case LoginActionTypes.login: {
      return true
    }

    case LoginActionTypes.logout: {
      return false

    }

    default: {
      return state
    }
  }
}

export const getLoginState = (state: LoginState) => state.user
