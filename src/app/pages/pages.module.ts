import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesRoutingModule }       from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from 'theme/theme.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountModule } from './account/account.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
    DashboardModule,
    AccountModule,
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule {
}
