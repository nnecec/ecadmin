import { createSelector, createFeatureSelector } from '@ngrx/store'

import { AccountActionTypes, AccountActions } from '../actions/account.action'

export interface AccountState {
  user: object,
  error: any,
  loading: boolean
}

const initialState = {
  user: {},
  error: null,
  loading: false
}

export type Action = AccountActions

export default function accountReducer (state: AccountState = initialState, action: AccountActions) {
  switch (action.type) {
    case AccountActionTypes.login: {
      return {
        ...state,
        error: null,
        loading: true
      }
    }

    case AccountActionTypes.logout: {
      return {
        ...state,
        error: null,
        loading: true
      }
    }

    case AccountActionTypes.signup: {
      return {
        ...state,
        error: null,
        loading: true
      }
    }
    case AccountActionTypes.signupSuccess: {
      return {
        ...state,
        error: null,
        loading: false
      }
    }
    case AccountActionTypes.signupFailure: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }

    default: {
      return state
    }
  }
}

export const getLoginState = (state: AccountState) => state.user
