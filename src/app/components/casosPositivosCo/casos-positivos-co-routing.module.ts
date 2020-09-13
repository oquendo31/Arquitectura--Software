import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CasosPositivosColComponent} from './casos-positivos-col.component'
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:CasosPositivosColComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasosPositivosRoutingModule { }
