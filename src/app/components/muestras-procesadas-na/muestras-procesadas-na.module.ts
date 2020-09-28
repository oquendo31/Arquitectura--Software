import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuestrasProcesadasRoutingModule } from './muestras-procesadas-routing.module';
import { MuestrasProcesadasNaComponent } from './muestras-procesadas-na.component';
import { FlexsLayoutModule } from '../flex-layout/flex-layout-module';
import { AgGridsModule } from '../ag-grid/ag-grid-module';



@NgModule({
  declarations: [
    MuestrasProcesadasNaComponent
  ],
  imports: [
    CommonModule,
    MuestrasProcesadasRoutingModule,
    FlexsLayoutModule,
    AgGridsModule
  ],

})
export class muestrasProcesadasModule { }
