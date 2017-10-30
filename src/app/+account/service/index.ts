import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { _throw } from 'rxjs/observable/throw'

import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

import { User, Authenticate } from '../model'

@Injectable()
export class AccountService {

  constructor (private http: Http, private apollo: Apollo) { }

  login ({ username, password }: Authenticate) {
    console.log(username, password, this.http)

    this.apollo.watchQuery({
      query: gql`
      query CurrentUserForProfile {
        currentUser {
          login
          avatar_url
        }
      }
    `
    })
    // .subscribe(({ data }) => {
    //   console.log(data)
    // })
    // if (username !== 'test') {
    //   return _throw('Invalid username or password')
    // }

    // return of({ name: 'User' })
  }

  logout () {
    return of(true)
  }
}
