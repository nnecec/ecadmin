import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Material
import { MatButtonModule } from '@angular/material'

import { NavbarComponent } from './navbar/navbar.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
  // static forRoot (): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: []
  //   }
  // }
}
