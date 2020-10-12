import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICasosPostivosCo } from '../interface/casos-postivos-co';

@Injectable({
  providedIn: 'root'
})
export class CasosPositivosService {
  public urlApi='https://www.datos.gov.co/resource/gt2j-8ykr.json'

  constructor(private httpClient: HttpClient) { }
  
  getAllCoviColombia():Observable<ICasosPostivosCo[]>{
    return this.httpClient.get<ICasosPostivosCo[]>( `${this.urlApi}`)
  }

}
