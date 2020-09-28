import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuestrasProcesadasRoutingModule } from './muestras-procesadas-routing.module';
import { MuestrasProcesadasNaComponent } from './muestras-procesadas-na.component';



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
