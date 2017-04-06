import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import {
  WeatherWidgetComponent,
  CotoneasterCardComponent,
  LineChartComponent,
  TableCardComponent,
  RobotCardComponent,
  TodoListComponent,
  TrendingWidgetComponent,
  PieChartComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    DashboardComponent,
    WeatherWidgetComponent,
    CotoneasterCardComponent,
    LineChartComponent,
    TableCardComponent,
    RobotCardComponent,
    TodoListComponent,
    TrendingWidgetComponent,
    PieChartComponent
  ],
  providers: []
})
export class DashboardModule {
}
