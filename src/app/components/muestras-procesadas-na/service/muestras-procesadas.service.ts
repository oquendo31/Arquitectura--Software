


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IMuestrasProcesadasNa } from '../interface/muestras-procesadas-na';

@Injectable({
  providedIn: 'root'
})
export class MuestrasProcesadasService {
  public urlApi='https://www.datos.gov.co/resource/8835-5baf.json'

  constructor(private httpClient: HttpClient) { }
  
  getAllCoviColombia():Observable<IMuestrasProcesadasNa[]>{
    return this.httpClient.get<IMuestrasProcesadasNa[]>( `${this.urlApi}`)
  }

}
