import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
