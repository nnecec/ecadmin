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
    console.log(username, password, this.http)

    return this.http.get('/api')
      .subscribe(data => {
        // data is now an instance of type ItemsResponse, so you can do this:
        console.log(data)
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
