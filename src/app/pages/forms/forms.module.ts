import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgaModule } from 'theme/nga.module';

import { FormsComponent } from './forms.component';
import { routing } from './forms.routing';

import { EmployerFormComponent } from './employerForm/employerForm.component';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    NgFormsModule,
    routing,
  ],
  declarations: [
    FormsComponent,
    EmployerFormComponent,
  ],
  providers: [],
})
export class FormsModule {}
