import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

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
import { ApolloClient } from 'apollo-client'
import { ApolloModule } from 'apollo-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument(),
    // EffectsModule.forRoot([]),

    ApolloModule,

    RootModule,
    AppRouting
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
