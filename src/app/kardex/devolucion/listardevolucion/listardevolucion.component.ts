import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataSalidaProductos } from '../../../models/salidaproductoscerrados';
import {MatTableDataSource} from '@angular/material/table';
import { DataDevolucion } from '../../../models/devoluciones';
@Component({
  selector: 'app-listardevolucion',
  templateUrl: './listardevolucion.component.html',
  styleUrls: ['./listardevolucion.component.css']
})
export class ListardevolucionComponent implements OnInit {
  // ListIngresosCerrados:DataSalidaProductos []= [];
  ListIngresosCerrados:DataDevolucion []= [];
  cargando = true; 
  displayedColumns: string[] = ['Nro Ingreso', 'Tipo Movimiento', 'Fecha', 'Nro Cotizacion','Empleado','Estado','details' ];
  dataSource = new MatTableDataSource<DataDevolucion>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private servicioKardex: KardexService , private router:Router,private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getListIngresosCerrados();
  }

  getListIngresosCerrados(){

    this.servicioKardex.getListIngresosCerrados()
   .subscribe(resp => {
    this.dataSource.data = resp as DataDevolucion[]; 
      this.ListIngresosCerrados = resp; 
      this.cargando = false;
      // this.cargando = false;
      // console.log(resp);
  });
 }

 openForEdit(DevolucionID: number) {

  this.router.navigate(['kardex/devolucion/'+DevolucionID]);
}
 
}
