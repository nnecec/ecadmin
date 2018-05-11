import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as Counter from './action'
import * as fromAccount from './reducer'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  count$: Observable<number>

  constructor (private store: Store<any>) {
    this.count$ = store.select(fromAccount.selectFeatureCount)
  }

  ngOnInit () {
    console.log('account module')
  }

  increment () {
    this.store.dispatch(new Counter.Increment())
  }

  decrement () {
    this.store.dispatch(new Counter.Decrement())
  }

  reset () {
    this.store.dispatch(new Counter.Reset(3))
  }
}
