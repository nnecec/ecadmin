import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

import { AccountService } from '../service'
import { SignupActionTypes } from '../action'

@Injectable()
export class AuthEffects {
  @Effect()
  signup$: Observable<Action> = this.actions$.pipe(
    ofType(SignupActionTypes.signup),
    mergeMap(action => this.accountService.signup(action))
  )

  constructor (
    private http: HttpClient,
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
