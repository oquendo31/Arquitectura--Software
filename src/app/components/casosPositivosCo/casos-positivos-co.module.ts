import { NgModule } from '@angular/core';
import { CasosPositivosRoutingModule } from './casos-positivos-co-routing.module'
import { CasosPositivosColComponent } from './casos-positivos-col.component'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CasosPositivosColComponent
  ],
  imports: [
    CommonModule,
    CasosPositivosRoutingModule
  ],

})
export class casosPositivosCoModule { }
