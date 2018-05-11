import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Material
import { MatButtonModule, MatExpansionModule, MatListModule, MatMenuModule } from '@angular/material'

import { NavbarComponent } from './navbar/navbar.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // Material
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule
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

}
