import { NgModule } from '@angular/core';
import { CasosPositivosRoutingModule } from './casos-positivos-co-routing.module'
import { CasosPositivosColComponent } from './casos-positivos-col.component'
import { CommonModule } from '@angular/common';
import { FlexsLayoutModule } from '../flex-layout/flex-layout-module';
import { AgGridsModule } from '../ag-grid/ag-grid-module';


@NgModule({
  declarations: [
    CasosPositivosColComponent
  ],
  imports: [
    CommonModule,
    CasosPositivosRoutingModule,
    FlexsLayoutModule,
    AgGridsModule
  ],

})
export class casosPositivosCoModule { }
