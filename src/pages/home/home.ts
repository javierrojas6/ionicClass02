import { Proxy } from './../../helpers/proxy/proxy';
import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Product } from '../../models/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  productos: Product;
  constructor(public navCtrl: NavController, private proxy: Proxy) {

    this.proxy.consult('http://localhost:3000/product/all', {}, 'get')
      .subscribe(result => {
        console.log(result);
      });
  }
}
