import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Material
import { MatCardModule } from '@angular/material'

import { RootRoutingModule } from './root-routing.module'
import { RootComponent } from './root.component'
import { SharedModule } from '../shared/shared.module'
import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component'

@NgModule({
  imports: [
    CommonModule,
    RootRoutingModule,
    SharedModule,

    MatCardModule
  ],
  declarations: [
    RootComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class RootModule { }
