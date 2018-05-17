import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material'

import { AccountRoutingModule } from './account-routing.module'
import { AccountComponent } from './account.component'
import { SignupComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'

export const COMPONENTS = [
  AccountComponent,
  SignupComponent,
  LoginComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AccountRoutingModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [{
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    }
  }]
})
export class AccountModule {

}
