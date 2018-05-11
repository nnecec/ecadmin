import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NgZorroAntdModule } from 'ng-zorro-antd'

import { NavbarComponent } from './navbar/navbar.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
