import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTrayectoPageRoutingModule } from './add-trayecto-routing.module';

import { AddTrayectoPage } from './add-trayecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTrayectoPageRoutingModule
  ],
  declarations: [AddTrayectoPage]
})
export class AddTrayectoPageModule {}
