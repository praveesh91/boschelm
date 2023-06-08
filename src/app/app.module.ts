import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule } from 'primeng/avatar';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BarChartComponent } from './core/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './core/charts/pie-chart/pie-chart.component';
import { StackedBarComponent } from './core/charts/stacked-bar/stacked-bar.component';
import { LineChartComponent } from './core/charts/line-chart/line-chart.component';
import { GaugeChartComponent } from './core/charts/gauge-chart/gauge-chart.component';
import { DoughnutChartComponent } from './core/charts/doughnut-chart/doughnut-chart.component';
import { FormComponent } from './core/charts/form/form.component';
import { HeaderComponent } from './core/header/header.component';
import { SideNavbarComponent } from './core/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarChartComponent,
    PieChartComponent,
    StackedBarComponent,
    LineChartComponent,
    GaugeChartComponent,
    DoughnutChartComponent,
    FormComponent,
    HeaderComponent,
    SideNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    AvatarModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    CountUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
