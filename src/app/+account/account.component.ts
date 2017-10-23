import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './action';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store: Store<any>) {
    this.counter = store.select('counter');
  }

  ngOnInit() {
    console.log('account module');
  }

  increment() {
    this.store.dispatch(new Counter.Increment());
  }

  decrement() {
    this.store.dispatch(new Counter.Decrement());
  }

  reset() {
    this.store.dispatch(new Counter.Reset(3));
  }
}
