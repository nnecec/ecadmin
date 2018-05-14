import { Component, OnInit } from '@angular/core'
import {
  FormControl,
  Validators
} from '@angular/forms'

import { Apollo } from 'apollo-angular'

// dependencies
import { AccountService } from '../service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  username = new FormControl('nnecec', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20)
  ])

  constructor (private AccountService: AccountService) {
  }

  ngOnInit () {

  }
  errorMessage (name, labelName) {
    if (this[name].hasError('required')) {
      return `请输入${labelName}`
    }

    if (this[name].hasError('minlength') || this[name].hasError('maxlength')) {
      return `请输入6-20位长度${labelName}`
    }
  }

  submit () {
    console.log(this)
  }

}
