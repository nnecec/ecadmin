import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable, of } from 'rxjs'
import { Apollo } from 'apollo-angular'

import { signupMutation, loginMutation } from '../graphql/account.graphql'

@Injectable()
export class AccountService {
  private http: Http

  constructor (http: Http, private apollo: Apollo) {
    this.http = http
  }

  signup ({ username, password }): Observable<any> {
    return this.http.post('/api/auth/signup', { username, password })

  }

  login ({ username, password }): Observable<any> {
    return this.http.post('/api/auth/login', { username, password })
  }
}
