import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'},
      {path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule'},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
