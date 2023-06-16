import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  
  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.global.showLoader();
    this.authService.logout().then(() => {
      this.navCtrl.navigateRoot('/login');
      this.global.hideLoader();
    })
    .catch(e => {
      console.log(e);
      this.global.hideLoader();
      this.global.errorToast('¡Cierre de sesión fallido! Comprueba tu conexión a Internet');
    });
  }

}