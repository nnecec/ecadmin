import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RootComponent } from './root.component'
import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component'

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [{
      path: '', redirectTo: 'home', pathMatch: 'full'
    }, {
      path: 'home', component: HomeComponent
    }, {
      path: 'about', component: AboutComponent
    }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
