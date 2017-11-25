import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import {
  WeatherComponent,
  CotoneasterCardComponent,
  LineChartComponent,
  TableCardComponent,
  RobotCardComponent,
  TodoListComponent,
  TrendingComponent,
  PieChartComponent,
} from './index';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    FormsModule,
    routing
  ],
  declarations: [
    DashboardComponent,
    WeatherComponent,
    CotoneasterCardComponent,
    LineChartComponent,
    TableCardComponent,
    RobotCardComponent,
    TodoListComponent,
    TrendingComponent,
    PieChartComponent,
  ],
  providers: []
})
export class DashboardModule {
}
