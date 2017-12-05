import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  BaPageTopComponent,
  BaSidebarComponent,
  BaMsgMenuComponent,
  BaNotificationMenuComponent,
  BaCardComponent,
} from './components';

const BASE_COMPONENTS = [
  BaPageTopComponent,
  BaSidebarComponent,
  BaMsgMenuComponent,
  BaNotificationMenuComponent,
  BaCardComponent,
];

const BASE_DIRECTIVES = [];

const BASE_PIPES = [];

const BASE_SERVICES = [];

const BASE_VALIDATORS = [];

@NgModule({
  declarations: [
    ...BASE_PIPES,
    ...BASE_DIRECTIVES,
    ...BASE_COMPONENTS
  ],
  imports: [
    // FIXME: get rid of the RouterModule
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...BASE_PIPES,
    ...BASE_DIRECTIVES,
    ...BASE_COMPONENTS
  ],
  providers: [
    ...BASE_VALIDATORS,
    ...BASE_SERVICES,
  ],
})
export class ThemeModule {}
