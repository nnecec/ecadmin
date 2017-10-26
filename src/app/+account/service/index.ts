import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { _throw } from 'rxjs/observable/throw'
import 'rxjs/add/operator/map'

import { User, Authenticate } from '../model'

@Injectable()
export class AccountService {

  constructor (private http: Http) { }

  login ({ username, password }: Authenticate) {
    console.log(username, password)

    return this.http.get('/api')
      .map(res => {
        console.log(res)

        return res.json()
      })

    // if (username !== 'test') {
    //   return _throw('Invalid username or password')
    // }

    // return of({ name: 'User' })
  }

  logout () {
    return of(true)
  }
}
