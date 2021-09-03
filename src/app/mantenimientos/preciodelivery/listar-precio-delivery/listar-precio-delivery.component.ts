import { Component, OnInit } from '@angular/core';
import { DataPrecioDelivery } from 'src/app/models/precioDelivery';
import {MatTableDataSource} from '@angular/material/table';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-precio-delivery',
  templateUrl: './listar-precio-delivery.component.html',
  styleUrls: ['./listar-precio-delivery.component.css']
})
export class ListarPrecioDeliveryComponent implements OnInit {
  displayedColumns: string[] = [ 'Empleado','Distrito', 'Precio Delivery', 'Estado','details', 'Activar','Inactivar'];
  dataSource = new MatTableDataSource<DataPrecioDelivery>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  preciodelive: DataPrecioDelivery[] = [];
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService) { }


  ngOnInit(): void {
    this. getPrecioDelivery();
  }
  getPrecioDelivery(){

    this.mantenientoservice.getPrecioDelivery()
   .subscribe(resp => {
    this.dataSource.data = resp as DataPrecioDelivery[]; 
   this.preciodelive = resp; 
 
  });
 } 

 openForEdit(precioId: number) {

  this.router.navigate(['mantenimientos/preciodelivery/'+precioId]);
}
Activar(form: DataPrecioDelivery, i: number) {
  const bodyform = {
    ...form,
    estado: 1,
  };
  Swal.fire({
    title: 'Esta seguro que desea Activar?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantenientoservice
        .ActivarPrecioDelivery(form.id, bodyform)
        .subscribe((resp) => {
          this.toastr.success('Activo');
          this.ngOnInit();
        });
    }
  });
}
Inactivar(form: DataPrecioDelivery, i: number) {
  Swal.fire({
    title: 'Esta seguro que desea Anular?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantenientoservice
        .InactivarPrecioDelivery(form.id)
        .subscribe((resp) => {
          this.toastr.error('Inactivo');
          this.ngOnInit();
        });
    }
  });
}
}
