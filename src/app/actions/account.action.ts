import { Action } from '@ngrx/store'

// Login info
export enum AccountActionTypes {
  login = '[Auth] Login',
  logout = '[Auth] Logout',
  loginSuccess = '[Auth] Login Success',
  loginFailure = '[Auth] Login Failure',
  loginRedirect = '[Auth] Login Redirect',

  signup = '[Auth] Signup',
  signupSuccess = '[Auth] Signup Success',
  signupFailure = '[Auth] Signup Failure'
}

export class Login implements Action {
  readonly type = AccountActionTypes.login
}

export class Logout implements Action {
  readonly type = AccountActionTypes.logout
}
export class LoginSuccess implements Action {
  readonly type = AccountActionTypes.loginSuccess
}
export class LoginFailure implements Action {
  readonly type = AccountActionTypes.loginFailure
}
export class LoginRedirect implements Action {
  readonly type = AccountActionTypes.loginRedirect
}

export class Signup implements Action {
  readonly type = AccountActionTypes.signup
  constructor (public payload: any) { }
}

export class SignupSuccess implements Action {
  readonly type = AccountActionTypes.signupSuccess
  constructor (public payload: any) { }
}

export class SignupFailure implements Action {
  readonly type = AccountActionTypes.signupFailure

  constructor (public payload: any) { }
}

export type AccountActions
  = Login
  | Logout
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Signup
  | SignupSuccess
  | SignupFailure
