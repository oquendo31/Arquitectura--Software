import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MuestrasProcesadasService } from './service/muestras-procesadas.service';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment';
import { IMuestrasProcesadasNa } from './interface//muestras-procesadas-na';

@Component({
  selector: 'app-muestras-procesadas-na',
  templateUrl: './muestras-procesadas-na.component.html',
  styleUrls: ['./muestras-procesadas-na.component.css']
})
export class MuestrasProcesadasNaComponent implements OnInit {
  public defaultColDef;

 
  constructor(private _location: Location, private muestrasProcesadasService: MuestrasProcesadasService) {
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
  }
  //creamos propiedad para controlara errores
  IMuestrasProcesadasNa: IMuestrasProcesadasNa[];
  errorApi: string;
  rowData: any; // cualquier tipo de propieadad  
  ngOnInit(): void {
    this.getAllCoviColombia();
  }

  back() {
    this._location.back()
  }

  getAllCoviColombia() {
    this.muestrasProcesadasService.getAllCoviColombia().pipe(catchError(err => this.errorApi = err)
    ).subscribe(
      resp => {
        this.rowData = resp
      });
  }

 

  columnDefs = [
    
    { headerName: 'Fecha ', width: 130, field: 'fecha', sortable: true, filter: true, valueFormatter(params){
      return moment(params.value).format('DD MMM, YYYY');} 
    },
    { headerName: 'Acumuladas', width: 130, field: 'acumuladas', sortable: true, filter: true },
     { headerName: 'Amazonas', width: 120, field: 'amazonas', sortable: true, filter: true },
    { headerName: 'Antioquia', width: 120, field: 'antioquia', sortable: true, filter: true },
    { headerName: 'Arauca', width: 100, field: 'arauca', sortable: true, filter: true },
    { headerName: 'Atlantico', width: 120, field: 'atlantico', sortable: true, filter: true },
    { headerName: 'Bogota', width: 100, field: 'bogota', sortable: true, filter: true },
    { headerName: 'Bolivar', width: 100, field: 'bolivar', sortable: true, filter: true },
    { headerName: 'Boyaca', width: 100, field: 'boyaca', sortable: true, filter: true },
    { headerName: 'Caldas ', width: 100, field: 'caldas', sortable: true, filter: true },
    { headerName: 'Caqueta', width: 110, field: 'caqueta', sortable: true, filter: true },
    { headerName: 'Casanare', width: 110, field: 'casanare', sortable: true, filter: true },
    { headerName: 'Cauca', width: 100, field: 'cauca', sortable: true, filter: true },
    { headerName: 'Cesar', width: 100, field: 'cesar', sortable: true, filter: true },
    { headerName: 'Choco', width: 100, field: 'choco', sortable: true, filter: true },
    { headerName: 'Cordoba', width: 120, field: 'cordoba', sortable: true, filter: true },
    { headerName: 'Cundinamarca', width: 140, field: 'cundinamarca', sortable: true, filter: true },
    { headerName: 'Guajira', width: 120, field: 'guaviare', sortable: true, filter: true },
    { headerName: 'Huila', width: 100, field: 'huila', sortable: true, filter: true },
    { headerName: 'Magdalena', width: 130, field: 'magdalena', sortable: true, filter: true },
    { headerName: 'Narino', width: 110, field: 'narino', sortable: true, filter: true },
    { headerName: 'Norte_de_santander', width: 180, field: 'norte_de_santander', sortable: true, filter: true },
    { headerName: 'Putumayo', width: 120, field: 'putumayo', sortable: true, filter: true },
    { headerName: 'Quindio', width: 110, field: 'quindio', sortable: true, filter: true },
    { headerName: 'Risaralda', width: 130, field: 'risaralda', sortable: true, filter: true },
    { headerName: 'San_andres', width: 130, field: 'san_andres', sortable: true, filter: true },
    { headerName: 'Sucre', width: 100, field: 'sucre', sortable: true, filter: true },
    { headerName: 'Tolima', width: 100, field: 'tolima', sortable: true, filter: true },
    { headerName: 'Valle del cauca', width: 150, field: 'valle_del_cauca', sortable: true, filter: true },
    { headerName: 'Vaupes', width: 110, field: 'vaupes', sortable: true, filter: true },
    { headerName: 'Vichada', width: 110, field: 'vichada', sortable: true, filter: true },
    
  ];

}
