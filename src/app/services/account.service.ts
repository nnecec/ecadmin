import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable, of } from 'rxjs'
import { Apollo } from 'apollo-angular'

import { signupMutation, loginMutation } from '../graphql/account.graphql'

@Injectable()
export class AccountService {
  constructor (private http: Http, private apollo: Apollo) { }

  signup ({ username, password }): Observable<any> {
    return this.apollo.mutate({
      mutation: signupMutation,
      variables: {
        username,
        password
      }
    })
  }

  login ({ username, password }): Observable<any> {
    return this.apollo.mutate({
      mutation: loginMutation,
      variables: {
        username,
        password
      }
    })
  }
}
