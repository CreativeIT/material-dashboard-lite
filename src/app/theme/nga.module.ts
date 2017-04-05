import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  BaPageTopComponent,
  BaSidebarComponent,
  BaMsgMenuComponent,
  BaNotificationMenuComponent
} from './components';

const NGA_COMPONENTS = [
  BaPageTopComponent,
  BaSidebarComponent,
  BaMsgMenuComponent,
  BaNotificationMenuComponent
];

const NGA_DIRECTIVES = [];

const NGA_PIPES = [];

const NGA_SERVICES = [];

const NGA_VALIDATORS = [];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  public static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        /*  BaThemeConfigProvider,
         BaThemeConfig,*/
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
