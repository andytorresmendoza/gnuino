import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { KardexService } from '../../services/kardex/kardex.service';
import { DataKardexoc } from '../../models/kardexoc';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
/** Constants used to fill up our data base. */
// const ELEMENT_DATA: DataKardexoc[] = [];
@Component({
  selector: 'app-listaprueba',
  templateUrl: './listaprueba.component.html', 
  styleUrls: ['./listaprueba.component.css']
 
})

export class ListapruebaComponent implements OnInit {
  displayedColumns: string[] = ['Producto', 'Cantidad Global', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<DataKardexoc>();


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private servicioKardex: KardexService){}

  ngOnInit(): void {
   this.getListKardexsinoc();
  }
  
  getListKardexsinoc(){ 
    this.servicioKardex.getLisKardexsinoc()
   .subscribe(resp => {
     
      this.dataSource.data = resp as DataKardexoc[]; 
       
     console.log(  this.dataSource.data);
   
      // this.cargando = false;
    //  console.log(resp);
  });
  }

 /* logData(row) {
    console.log(row);
  } */
   /*getListKardexsinoc(){ 
    this.servicioKardex.getLisKardexsinoc()
   .subscribe(resp => {
     
      this.dataSource.data = resp as DataKardexoc[]; 
      console.log(  this.dataSource.data);
   
      // this.cargando = false;
    //  console.log(resp);
  });*/
  
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
 
