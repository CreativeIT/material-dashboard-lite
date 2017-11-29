import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends UpgradeDomAfterViewInit {}
