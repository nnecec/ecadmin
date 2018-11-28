// custom
import { AccountComponent } from './account/account.component'
import { LoginComponent } from './account/login/login.component'
import { SignupComponent } from './account/sign-up/sign-up.component'
import { HeaderComponent } from './components/shared/header/header.component'
import { FooterComponent } from './components/shared/footer/footer.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { RootComponent } from './components/shared/root/root.component'
import { HomeComponent } from './home/home.component'

export const CUSTOM_COMPONENTS = [
  AccountComponent,
  LoginComponent,
  SignupComponent,
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  RootComponent,
  HomeComponent
]

// material
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule
} from '@angular/material'

export const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule
]
