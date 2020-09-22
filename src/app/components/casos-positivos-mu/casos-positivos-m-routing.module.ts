import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {CasosPositivosMuComponent} from './casos-positivos-mu.component'

const routes: Routes = [
  {path:'', component:CasosPositivosMuComponent }
];

@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasosPositivosMRoutingModule { }
