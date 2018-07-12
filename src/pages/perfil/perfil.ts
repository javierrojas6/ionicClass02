import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  usuario: Usuario;
  constructor(public navCtrl: NavController) {
    this.usuario = new Usuario();
    this.usuario.foto = 'https://loremflickr.com/320/240/paris,girl/all';
  }

  save() {
    console.log(this.usuario);
  }
}
