import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { ThemeModule } from 'theme/theme.module';

import { AccountComponent } from './account.component';

import { EmployerFormComponent } from './employer-form/employer-form.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
  ],
  declarations: [
    AccountComponent,
    EmployerFormComponent,
  ],
  providers: [],
})
export class AccountModule {}
