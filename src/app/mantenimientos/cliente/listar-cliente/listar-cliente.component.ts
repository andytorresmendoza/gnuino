import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataCliente } from 'src/app/models/cliente';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'Categoría Cliente','Dni', 'Estado','details','Activar', 'Inactivar'];
  dataSource = new MatTableDataSource<DataCliente>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  clientes: DataCliente[] = [];
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {

    this. getCliente();
  }

  getCliente(){

    this.mantenientoservice.getCliente()
   .subscribe(resp => {
    this.dataSource.data = resp as DataCliente[]; 
  this.clientes = resp; 
 
  });
 } 
 openForEdit(CotizacionId: number) {

  this.router.navigate(['mantenimientos/cliente/'+CotizacionId]);
}
Activar(form: DataCliente, i: number) {
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
        .ActivarCliente(form.id, bodyform)
        .subscribe((resp) => {
          this.toastr.success('Activo');
          this.ngOnInit();
        });
    }
  });
}
Inactivar(form: DataCliente, i: number) {
  Swal.fire({
    title: 'Esta seguro que desea Anular?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantenientoservice
        .InactivarCliente(form.id)
        .subscribe((resp) => {
          this.toastr.error('Inactivo');
          this.ngOnInit();
        });
    }
  });
}
}
