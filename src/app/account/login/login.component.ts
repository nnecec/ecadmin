import { Component, Inject, OnInit } from '@angular/core'
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

import { Apollo } from 'apollo-angular'

// service
import { AccountService } from '../../services/account.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor (@Inject(FormBuilder) fb: FormBuilder, private AccountService: AccountService) {
    this.loginForm = fb.group({
      username: ['nnecec', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
    })
  }

  ngOnInit () {

  }
  errorMessage (name, labelName) {
    if (this.loginForm.controls[name].hasError('required')) {
      return `请输入${labelName}`
    }

    if (this.loginForm.controls[name].hasError('minlength') || this.loginForm.controls[name].hasError('maxlength')) {
      return `请输入6-20位长度${labelName}`
    }
  }

  submit () {
    console.log(this)
  }

}
