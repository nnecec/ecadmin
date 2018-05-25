import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor (private store: Store<any>) {
  }

  ngOnInit () {
    console.log('account module')
  }
}
