import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTrayectoPage } from './add-trayecto.page';

const routes: Routes = [
  {
    path: '',
    component: AddTrayectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTrayectoPageRoutingModule {}
