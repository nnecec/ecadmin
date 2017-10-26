import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

// dependencies
import { AccountService } from '../service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup

  constructor (private fb: FormBuilder, private AccountService: AccountService) {
  }

  ngOnInit () {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    })
  }

  _submitForm () {
    for (let i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty()
    }

    if (this.validateForm.valid) {
      const query = this.validateForm.value
      console.log(query)
      this.AccountService.login(query)
    }

  }

}
