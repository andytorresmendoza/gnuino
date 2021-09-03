import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProveedor } from '../../../models/proveedor';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {
  // proveedores: DataProveedor[] = [];
  // cargando = true; 
  displayedColumns: string[] = ['Nombre Proveedor', 'RUC', 'Email','Telefono','Estado','details' ,'Activar','Inactivar'];
  dataSource = new MatTableDataSource<DataProveedor>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  proveedores: DataProveedor[] = [];


  constructor(private mantemientosService: MantenimientosService,  private toastr: ToastrService , private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getProveedor()
    .subscribe(resp => {
      this.dataSource.data = resp as DataProveedor[]; 
    this.proveedores = resp; 
      // this.cargando = false;
       console.log(resp);
  
 
   });
  }

 

  openForEdit(idProveedor: number) {

    this.router.navigate(['../mantenimientos/addproveedor/'+idProveedor]);
  }
  
  Activar(form: DataProveedor, i: number) {
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
        this.mantemientosService
          .ActivarProveedo(form.id, bodyform)
          .subscribe((resp) => {
            this.toastr.success('Activo');
            this.ngOnInit();
          });
      }
    });
  }
  Inactivar(form: DataProveedor, i: number) {
    Swal.fire({
      title: 'Esta seguro que desea Anular?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.mantemientosService
          .InactivarProveedo(form.id)
          .subscribe((resp) => {
            this.toastr.error(' Inactivo');
            this.ngOnInit();
          });
      }
    });
  } 
}
