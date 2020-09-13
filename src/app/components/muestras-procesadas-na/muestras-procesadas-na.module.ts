import { NgModule } from '@angular/core';
import { MuestrasProcesadasRoutingModule } from './muestras-procesadas-routing.module'
import { MuestrasProcesadasNaComponent } from './muestras-procesadas-na.component'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MuestrasProcesadasNaComponent
  ],
  imports: [
    CommonModule,
    MuestrasProcesadasRoutingModule
  ],

})
export class muestrasProcesadasModule { }
