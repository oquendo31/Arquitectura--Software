import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
// import { MaterialModule } from '../material-module/material-module';
import { FlexsLayoutModule } from '../flex-layout/flex-layout-module';
import { DashboardRoutingModule } from './dashboard-routing.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule ,
    DashboardRoutingModule,
    // MaterialModule,
     FlexsLayoutModule
  ]
})
export class DashboardModule { }
