import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import { CasosPositivosService } from './service/casos-positivos.service';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment';
import { ICasosPostivosCo } from './interface/casos-postivos-co';

@Component({
  selector: 'app-casos-positivos-col',
  templateUrl: './casos-positivos-col.component.html',
  styleUrls: ['./casos-positivos-col.component.css']
})
export class CasosPositivosColComponent implements OnInit {
  public defaultColDef;

  constructor(private _location: Location, private casosPositivosCoService: CasosPositivosService) {
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
  }

  //creamos propiedad para controlara errores
  ICasosPostivosCo: ICasosPostivosCo[];
  errorApi: string;
  rowData: any; // cualquier tipo de propieadad  
  ngOnInit(): void {
    this.getAllCoviColombia();
  }

  back() {
    this._location.back()
  }

  getAllCoviColombia() {
    this.casosPositivosCoService.getAllCoviColombia().pipe(catchError(err => this.errorApi = err)
    ).subscribe(
      resp => {
        this.rowData = resp
      });
  }

  columnDefs = [
    { headerName: 'Id caso #', width: 110, field: 'id_de_caso', sortable: true, filter: true },
    { headerName: 'Fecha notificación', width: 180, field: 'fecha_de_notificaci_n', sortable: true, filter: true, valueFormatter(params){
      return moment(params.value).format('DD MMM, YYYY');} 
    },
    { headerName: 'Ciudad ubicación', width: 180, field: 'ciudad_de_ubicaci_n', sortable: true, filter: true },
    { headerName: 'Departamento', width: 180, field: 'departamento', sortable: true, filter: true },
    { headerName: 'Atencion', width: 130, field: 'atenci_n', sortable: true, filter: true },
    { headerName: 'Edad', width: 90, field: 'edad', sortable: true, filter: true },
    { headerName: 'Sexo', width: 90, field: 'sexo', sortable: true, filter: true },
    { headerName: 'Tipo', width: 130, field: 'tipo', sortable: true, filter: true },
    { headerName: 'Estado', width: 130, field: 'estado', sortable: true, filter: true },
    { headerName: 'Fecha diagnostico', width: 130, field: 'fecha_diagnostico', sortable: true, filter: true },
    { headerName: 'Fecha recuperado', width: 130, field: 'fecha_recuperado', sortable: true, filter: true },
    { headerName: 'Fecha reporte we', width: 130, field: 'fecha_reporte_web', sortable: true, filter: true },
    { headerName: 'Tipo recuperacion', width: 130, field: 'tipo_recuperaci_n', sortable: true, filter: true },
    { headerName: 'Codigo departamento', width: 130, field: 'codigo_departamento', sortable: true, filter: true },
    { headerName: 'Pertenencia etnica', width: 130, field: 'pertenencia_etnica', sortable: true, filter: true },
    { headerName: 'Ubicacion recuperado', width: 130, field: 'ubicaci_n_recuperado', sortable: true, filter: true },
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000, sortable: true,filter: true },
  //   { make: 'Ford', model: 'Mondeo', price: 32000, sortable: true,filter: true },
  //   { make: 'Porsche', model: 'Boxter', price: 72000, sortable: true,filter: true }
  // ];


}
