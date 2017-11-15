import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cotoneaster-card',
  styleUrls: ['./cotoneasterCard.scss'],
  templateUrl: './cotoneasterCard.html',
 // encapsulation: ViewEncapsulation.None
})
export class CotoneasterCardComponent {

  constructor() {
    console.log('CotoneasterCardComponent component');
  }
}
