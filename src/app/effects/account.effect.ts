import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { MatSnackBar } from '@angular/material'

import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { catchError, map, exhaustMap } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

import { AccountService } from '../services/account.service'
import { Signup, Login, AccountActionTypes, SignupSuccess, SignupFailure, LoginSuccess, LoginFailure } from '../actions/account.action'
import * as RouterActions from '../actions/router.action'

@Injectable()
export class AccountEffects {

  @Effect()
  signup$: Observable<Action> = this.actions$.pipe(
    ofType<Signup>(AccountActionTypes.signup),
    map(action => action.payload),
    exhaustMap((signup: any) => this.accountService.signup(signup)
      .pipe(
        map(data => new SignupSuccess(data)),
        catchError(err => of(new SignupFailure(err)))
      )
    )
  )

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<Login>(AccountActionTypes.login),
    map(action => action.payload),
    exhaustMap((login: any) => this.accountService.login(login)
      .pipe(
        map(data => {
          const token = JSON.parse(data._body).token
          localStorage.setItem('token', token)
          // store.dispatch(new RouterActions.Back())
          this.snackBar.open('login success.', 'ok', { duration: 2000 })
          return new LoginSuccess(token)
        }),
        catchError(err => of(new LoginFailure(err)))
      )
    )
  )

  constructor (
    // private router: Router,
    private actions$: Actions,
    private accountService: AccountService,
    public snackBar: MatSnackBar
  ) { }
}
