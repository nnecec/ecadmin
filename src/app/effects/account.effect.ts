import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { catchError, map, exhaustMap } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

import { AccountService } from '../services/account.service'
import { Signup, AccountActionTypes, SignupSuccess, SignupFailure } from '../actions/account.action'

@Injectable()
export class AccountEffects {
  @Effect()
  signup$: Observable<Action> = this.actions$.pipe(
    ofType<Signup>(AccountActionTypes.signup),
    exhaustMap((action: any) =>
      this.accountService.signup(action)
        .pipe(
          map(data => new SignupSuccess(data)),
          catchError(err => of(new SignupFailure(err)))
        )
    )
  )

  constructor (
    private http: HttpClient,
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
