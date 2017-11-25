declare const componentHandler: any;

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
