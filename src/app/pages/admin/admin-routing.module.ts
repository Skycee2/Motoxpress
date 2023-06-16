import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'add-user',
        loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
      },
      {
        path: '',
        redirectTo: '/admin/add-user',
        pathMatch: 'full'
      }
    ]
  },  {
    path: 'add-trayecto',
    loadChildren: () => import('./add-trayecto/add-trayecto.module').then( m => m.AddTrayectoPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminPageRoutingModule {}
