import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listaralmacen',
  templateUrl: './listaralmacen.component.html',
  styleUrls: ['./listaralmacen.component.css']
})
export class ListaralmacenComponent implements OnInit {

  displayedColumns: string[] = ['Codigo', 'Nombre', 'Direccion', 'Estado','details' ,'Activar','Inactivar'];
  dataSource = new MatTableDataSource<DataTipoAlmacen>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
almacenes: DataTipoAlmacen[]=[];
  
   
  constructor(private mantemientosService: MantenimientosService, private router:Router, private toastr: ToastrService) { }
 

  ngOnInit(): void {
    this.mantemientosService.getTipoAlmacen()
    .subscribe(resp => {
      this.dataSource.data = resp as DataTipoAlmacen[]; 
 
     
   });
  }
 
  openForEdit(idalmacen: number) {

    this.router.navigate(['mantenimientos/addalmacen/'+idalmacen]);
  }
  Activar(form: DataTipoAlmacen, i: number) {
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
          .ActivarTipoAlmacen(form.id, bodyform)
          .subscribe((resp) => {
            this.toastr.success('Activo');
            this.ngOnInit();
          });
      }
    });
  }
  Inactivar(form: DataTipoAlmacen, i: number) {
    Swal.fire({
      title: 'Esta seguro que desea Anular?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.mantemientosService
          .InactivarTipoAlmacen(form.id)
          .subscribe((resp) => {
            this.toastr.error('Inactivo');
            this.ngOnInit();
          });
      }
    });
  }
}
