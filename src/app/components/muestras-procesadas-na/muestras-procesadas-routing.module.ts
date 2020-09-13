import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MuestrasProcesadasNaComponent } from './muestras-procesadas-na.component'

const routes: Routes = [
  { path: '', component: MuestrasProcesadasNaComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MuestrasProcesadasRoutingModule { }
