import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
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
