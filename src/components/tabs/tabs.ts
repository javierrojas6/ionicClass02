import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { PerfilPage } from '../../pages/perfil/perfil';

@Component({
  selector:'tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {
  tab1 = PerfilPage;
  constructor(public navCtrl: NavController) {
  }
  openCanasta(){
    console.log('openCanasta');
  }
  openPerfil(){
    this.navCtrl.setRoot(PerfilPage);
  }
}
