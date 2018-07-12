import { Component } from '@angular/core';
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
    this.http.get('http://localhost:3000/product/all')
      .subscribe(data => {
        this.productos = data.content[0];
        console.log(this.productos);
      });
  }
}
