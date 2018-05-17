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
  }

  ngOnInit () {
    console.log('account module')
  }
}
