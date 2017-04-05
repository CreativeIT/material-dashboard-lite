import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class DashboardComponent {

  constructor() {
    console.log('dashboard component');
  }
}
