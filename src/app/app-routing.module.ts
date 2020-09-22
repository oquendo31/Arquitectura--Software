import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  {
    path: 'muestras-procesadas-na',
    loadChildren: () => import('./components/muestras-procesadas-na/muestras-procesadas-na.module').then(m => m.muestrasProcesadasModule)
  },


  {
    path: 'casos-poistivos-co',
    loadChildren: () => import('./components/casosPositivosCo/casos-positivos-co.module').then(m => m.casosPositivosCoModule)
  },
    {path:'casos-poistivos-m',
  loadChildren:() => import ('./components/casos-positivos-mu/casos-positivos-m.module').then(m=>m.CasosPositivosMModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
