import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

// external packages

// ngrx
import { StoreModule } from '@ngrx/store'
// import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

// app configuration
import { AppRouting } from './app.routing'
import { AppService } from './app.service'

// app Component
import { AppComponent } from './app.component'
import { RootModule } from './root/root.module'

// Application wide providers
const APP_PROVIDERS = [
  AppService
]

// ngrx
import { reducers, metaReducers } from './reducers'

// apollo
import { ApolloModule, Apollo } from 'apollo-angular'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // apollo
    ApolloModule,
    HttpLinkModule,

    // routes
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument(),
    // EffectsModule.forRoot([]),

    RootModule,
    AppRouting
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
