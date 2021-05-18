import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataKardexoc } from '../../models/kardexoc';
import { KardexService } from '../../services/kardex/kardex.service';
 
@Component({
  selector: 'app-listaprueba',
  templateUrl: './listaprueba.component.html',
  styles: [
  ]
})

export class ListapruebaComponent implements OnInit {
  // lista:DataKardexoc[]=[];

  public displayedColumns = ['detalleNameProducto'
];
  public dataSource2 =  new MatTableDataSource<DataKardexoc>();
   
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor  (private servicioKardex: KardexService) { }

  ngOnInit(): void {
    this.getListKardexsinoc()
    console.log(this.dataSource2);
  }

 /* logData(row) {
    console.log(row);
  } */
   getListKardexsinoc(){ 
    this.servicioKardex.getLisKardexsinoc()
   .subscribe(resp => {
     
      this.dataSource2.data = resp as DataKardexoc[]; 
   
      // this.cargando = false;
    //  console.log(resp);
  });
  }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
