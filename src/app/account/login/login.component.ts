import { Component, Inject, OnInit } from '@angular/core'
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  NgForm
} from '@angular/forms'

import { Apollo } from 'apollo-angular'
import { Store } from '@ngrx/store'

// service
import { AccountService } from '../../services/account.service'
import { Login } from '../../actions/account.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup

  constructor (
    @Inject(FormBuilder) fb: FormBuilder,
    private apollo: Apollo,
    private store: Store<any>
  ) {
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

  submit (form: NgForm) {
    console.log(this)
    if (form.valid) {
      this.store.dispatch(new Login(form.value))
    }

  }

}
