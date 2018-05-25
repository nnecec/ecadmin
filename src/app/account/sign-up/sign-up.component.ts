import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms'
import { Apollo } from 'apollo-angular'
import { MatSnackBar } from '@angular/material'
import { Store } from '@ngrx/store'

import { signupMutation } from '../../graphql/account.graphql'
import { Signup } from '../../actions/account.action'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>()

  private signupForm: FormGroup

  constructor (
    @Inject(FormBuilder) fb: FormBuilder,
    private apollo: Apollo,
    private snackBar: MatSnackBar,
    private store: Store<any>
  ) {
    this.signupForm = fb.group({
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
    if (this.signupForm.controls[name].hasError('required')) {
      return `请输入${labelName}`
    }

    if (this.signupForm.controls[name].hasError('minlength') || this.signupForm.controls[name].hasError('maxlength')) {
      return `请输入6-20位长度${labelName}`
    }
  }

  submit (form: NgForm) {
    if (form.valid) {
      this.store.dispatch(new Signup(form.value))
    }
  }
}
