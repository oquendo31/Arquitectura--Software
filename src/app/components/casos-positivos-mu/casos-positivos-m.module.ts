import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasosPositivosMuComponent } from './casos-positivos-mu.component'
import { CasosPositivosMRoutingModule } from './casos-positivos-m-routing.module'


@NgModule({
  declarations: [
    CasosPositivosMuComponent
  ],
  imports: [
    CommonModule,
    CasosPositivosMRoutingModule
  ]
})
export class CasosPositivosMModule { }
