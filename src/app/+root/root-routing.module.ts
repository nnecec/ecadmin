import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [{
      path: '', redirectTo: 'home', pathMatch: 'full'
    }, {
      path: 'home', loadChildren: 'app/home/home.module#HomeModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
