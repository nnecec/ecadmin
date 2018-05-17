import { Component, OnInit, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms'
import { Apollo } from 'apollo-angular'

import { signupMutation } from '../graphql/mutation'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup

  constructor (
    @Inject(FormBuilder) fb: FormBuilder,
    private apollo: Apollo
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
    console.log(form.value)
    if (form.valid) {
      this.apollo.mutate({
        mutation: signupMutation,
        variables: {
          username: form.value.username,
          password: form.value.password
        }
      }).subscribe(({ data }) => {
        console.log('got data', data)
      }, (error) => {
        console.log('there was an error sending the query', error)
      })
    }
  }
}
