import { Component } from '@angular/core';

/**
 * Generated class for the PagesCanastaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'canasta',
  templateUrl: 'canasta.html'
})
export class PagesCanastaComponent {

  text: string;

  constructor() {
    console.log('Hello PagesCanastaComponent Component');
    this.text = 'Hello World';
  }

}
