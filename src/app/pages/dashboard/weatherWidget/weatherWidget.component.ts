import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weather-widget',
  styleUrls: ['./weatherWidget.scss'],
  templateUrl: './weatherWidget.html',
  encapsulation: ViewEncapsulation.None
})
export class WeatherWidgetComponent {

  constructor() {
    console.log('WeatherWidgetComponent component');
  }
}
