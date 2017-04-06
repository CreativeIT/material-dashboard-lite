import { Component } from '@angular/core';

@Component({
  selector: 'weather-widget',
  styleUrls: ['./weatherWidget.scss'],
  templateUrl: './weatherWidget.html'
})
export class WeatherWidgetComponent {

  constructor() {
    console.log('WeatherWidgetComponent component');
  }
}
