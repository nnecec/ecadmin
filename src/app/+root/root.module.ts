import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RootRoutingModule } from './root-routing.module'
import { RootComponent } from './root.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    RootRoutingModule,
    SharedModule
  ],
  declarations: [RootComponent]
})
export class RootModule { }
