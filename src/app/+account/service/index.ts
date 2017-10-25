import { Injectable } from '@angular/core'
import { of } from 'rxjs/observable/of'
import { _throw } from 'rxjs/observable/throw'
import { User, Authenticate } from '../model'

@Injectable()
export class AccountService {
  constructor () { }

  login ({ username, password }: Authenticate) {
    console.log(username,password)
    if (username !== 'test') {
      return _throw('Invalid username or password')
    }

    return of({ name: 'User' })
  }

  logout () {
    return of(true)
  }
}
