import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AccountComponent } from './account.component'
import { SignupComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [{
      path: '',
      redirectTo: 'login'
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'signup',
      component: SignupComponent
    }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
