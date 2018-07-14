import { Proxy } from './../../helpers/proxy/proxy';
import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  productos: Product;
  constructor(public navCtrl: NavController, private http: HttpClient) {
   /*   let p = new Proxy(http);

    user= p.user.get(3);
    p.user.save({firstName:'pablito'});

    p.consult('http://localhost:3000/product/all', {}, 'get')
      .subscribe(result => {
        console.log(result);
      });*/
  }
}
