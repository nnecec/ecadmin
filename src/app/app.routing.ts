import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RootComponent } from './components/shared/root/root.component'
import { HomeComponent } from './home/home.component'

import { AccountComponent } from './account/account.component'
import { LoginComponent } from './account/login/login.component'
import { SignupComponent } from './account/sign-up/sign-up.component'

const routes: Routes = [{
  path: '', pathMatch: 'full',
  component: RootComponent,
  children: [{
    path: 'home',
    component: HomeComponent
  }]
}, {
  path: 'account',
  component: AccountComponent,
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
