import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

import { signupMutation } from '../graphql/mutation'

@Injectable()
export class AccountService {
  constructor (private http: Http, private apollo: Apollo) { }

  signup ({ username, password }) {
    return this.apollo.mutate({
      mutation: signupMutation,
      variables: {
        username,
        password
      }
    }).subscribe(({ data }) => data, (error) => error)
  }
}
