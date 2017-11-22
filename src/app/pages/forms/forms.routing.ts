import { Routes, RouterModule }  from '@angular/router';

import { FormsComponent } from './forms.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '', component: FormsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
