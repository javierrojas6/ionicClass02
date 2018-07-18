import { Usuario } from './../../models/usuario';
import { Proxy } from './../../helpers/proxy/proxy';
import { Component, Injectable, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Product } from '../../models/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage implements OnInit {
  productos: Product;
  user: Usuario;
  isLogged = false;
  constructor(public navCtrl: NavController, private proxy: Proxy) {
  }
  ngOnInit(): void {
    var a = localStorage.getItem('user');
    if (a) {
      this.isLogged = true;
      var tmp: { firstName: string, email: string } = JSON.parse(a);
      this.user = new Usuario();
      this.user.nombre = tmp.firstName;
      this.user.email = tmp.email;
    }
  }
  login(event) {
    let params = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    console.log(params);
    this.proxy.user.login(params)
      .then((result: { status: boolean, content: any }) => {
        if (result.status) {
          //logn exitoso
          localStorage.setItem('user', JSON.stringify(result.content));
          localStorage.setItem('token', result.content.token);

          this.user = new Usuario();
          this.user.nombre = result.content.firstName;
          this.user.email = result.content.email;

          this.isLogged = true;
        } else {
          console.log(result.content)
        }
      });

  }
  logOut() {
    var token:any = localStorage.removeItem('token');
    this.proxy.user.logout(token)
      .then(result => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.isLogged = false;
      });
  }
}
