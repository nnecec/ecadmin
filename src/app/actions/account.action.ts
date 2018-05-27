import { Action } from '@ngrx/store'

// Login info
export enum AccountActionTypes {
  login = '[Auth] Login',
  logout = '[Auth] Logout',
  loginSuccess = '[Auth] Login Success',
  loginFailure = '[Auth] Login Failure',
  loginRedirect = '[Auth] Login Redirect',

  signup = '[Auth] Sign up',
  signupSuccess = '[Auth] Sign up Success',
  signupFailure = '[Auth] Sign up Failure'
}

export class Login implements Action {
  readonly type = AccountActionTypes.login
  constructor (public payload: any) { }
}

export class Logout implements Action {
  readonly type = AccountActionTypes.logout
}
export class LoginSuccess implements Action {
  readonly type = AccountActionTypes.loginSuccess
  constructor (public payload: any) { }
}
export class LoginFailure implements Action {
  readonly type = AccountActionTypes.loginFailure
  constructor (public payload: any) { }
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
