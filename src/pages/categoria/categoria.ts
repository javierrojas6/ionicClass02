import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html'
})
export class CategoriaPage {
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let page = this.navParams.get('page');
    
    this.title = page.title;
  }
}