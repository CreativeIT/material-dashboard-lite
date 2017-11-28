import { Routes, RouterModule }  from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'pages',
      component: PagesComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'account', component: AccountComponent },
      ],
    },
  ])],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
