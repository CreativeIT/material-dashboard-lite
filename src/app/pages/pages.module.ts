import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { PagesComponent } from './pages.component';
import { NgaModule } from '../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule {
}
