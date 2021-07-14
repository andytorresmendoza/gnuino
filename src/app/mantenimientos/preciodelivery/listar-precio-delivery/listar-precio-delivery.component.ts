import { Component, OnInit } from '@angular/core';
import { DataPrecioDelivery } from 'src/app/models/precioDelivery';
import {MatTableDataSource} from '@angular/material/table';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listar-precio-delivery',
  templateUrl: './listar-precio-delivery.component.html',
  styleUrls: ['./listar-precio-delivery.component.css']
})
export class ListarPrecioDeliveryComponent implements OnInit {
  displayedColumns: string[] = [ 'Empleado','Distrito', 'Precio Delivery','details'];
  dataSource = new MatTableDataSource<DataPrecioDelivery>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService) { }


  ngOnInit(): void {
    this. getPrecioDelivery();
  }
  getPrecioDelivery(){

    this.mantenientoservice.getPrecioDelivery()
   .subscribe(resp => {
    this.dataSource.data = resp as DataPrecioDelivery[]; 
      // this.cliente = resp; 
    console.log(resp);
      // this.cargando = false;
     //  console.log(resp);
  });
 } 

 openForEdit(precioId: number) {

  this.router.navigate(['mantenimientos/preciodelivery/'+precioId]);
}
}
