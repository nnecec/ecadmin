import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// external packages
import { NgZorroAntdModule } from 'ng-zorro-antd';

// app configuration
import { AppRouting } from './app.routing';
import { AppService } from './app.service';

// app Component
import { AppComponent } from './app.component';
import { RootModule } from './+root/root.module';

// Application wide providers
const APP_PROVIDERS = [
  AppService
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),

    RootModule,
    AppRouting
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
