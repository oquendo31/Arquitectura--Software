import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
@Component({
  selector: 'app-casos-positivos-col',
  templateUrl: './casos-positivos-col.component.html',
  styleUrls: ['./casos-positivos-col.component.css']
})
export class CasosPositivosColComponent implements OnInit {
  public defaultColDef;

  constructor(private _location: Location) { 
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
  }

  ngOnInit(): void {
  }

  back() {
    this._location.back()
  }

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, sortable: true,filter: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, sortable: true,filter: true },
    { make: 'Porsche', model: 'Boxter', price: 72000, sortable: true,filter: true }
  ];


}
