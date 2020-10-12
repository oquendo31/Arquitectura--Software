import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasosPositivosMuComponent } from './casos-positivos-mu.component'
import { CasosPositivosMRoutingModule } from './casos-positivos-m-routing.module'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

@NgModule({
  declarations: [
    CasosPositivosMuComponent
  ],
  imports: [
    CommonModule,
    CasosPositivosMRoutingModule,
    SweetAlert2Module
    
  ]
})
export class CasosPositivosMModule { }
