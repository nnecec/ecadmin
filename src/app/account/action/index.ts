import { Action } from '@ngrx/store'
import { User, Authenticate } from '../model'

// Login info
export enum LoginActionTypes {
  login = '[Auth] Login',
  logout = '[Auth] Logout',
  loginSuccess = '[Auth] Login Success',
  loginFailure = '[Auth] Login Failure',
  loginRedirect = '[Auth] Login Redirect'
}

export class Login implements Action {
  readonly type = LoginActionTypes.login
}

export class Logout implements Action {
  readonly type = LoginActionTypes.logout
}

export type LoginActions
  = Login
  | Logout

// Signup info
export enum SignupActionTypes {
  signup = '[Auth] Signup',
  signupSuccess = '[Auth] Signup Success',
  signupFailure = '[Auth] Signup Failure'
}

export class Signup implements Action {
  readonly type = SignupActionTypes.signup
}

export class SignupSuccess implements Action {
  readonly type = SignupActionTypes.signupSuccess
}

export type SignupActions
  = Signup
  | SignupSuccess
