import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserPage } from './add-user.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserPage
  },  {
    path: 'add-sector',
    loadChildren: () => import('./add-sector/add-sector.module').then( m => m.AddSectorPageModule)
  },
  {
    path: 'add-moto',
    loadChildren: () => import('./add-moto/add-moto.module').then( m => m.AddMotoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserPageRoutingModule {}
