import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

// external packages

// ngrx
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

// app configuration
import { AppRouting } from './app.routing'
import { AppService } from './app.service'

import { CustomSerializer } from './utils/router-store'

// Application wide providers
const APP_PROVIDERS = [
  AppService,
  { provide: RouterStateSerializer, useClass: CustomSerializer }
]

// ngrx
import { reducers, metaReducers } from './reducers'

import { AccountEffects } from './effects/account.effect'

// apollo
import { ApolloModule, Apollo } from 'apollo-angular'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Component
import { AppComponent } from './app.component'
import { AccountComponent } from './account/account.component'
import { LoginComponent } from './account/login/login.component'
import { SignupComponent } from './account/sign-up/sign-up.component'
import { HeaderComponent } from './components/shared/header/header.component'
import { FooterComponent } from './components/shared/footer/footer.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { RootComponent } from './components/shared/root/root.component'
import { HomeComponent } from './home/home.component'

// Material
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatExpansionModule, MatListModule, MatMenuModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    RootComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // apollo
    ApolloModule,
    HttpLinkModule,

    // routes
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forFeature([AccountEffects]),

    AppRouting,

    // Material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule

  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:4001/graphql' }),
      cache: new InMemoryCache()
    })
  }
}
