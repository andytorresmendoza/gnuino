import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import { DataBancoVenta } from '../../../models/bancoventa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarbancoventa',
  templateUrl: './listarbancoventa.component.html',
  styleUrls: ['./listarbancoventa.component.css']
})
export class ListarbancoventaComponent implements OnInit {
  displayedColumns: string[] = ['Banco',  'Estado','details', 'Activar', 'Inactivar'];
  dataSource = new MatTableDataSource<DataBancoVenta>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  bancoventa: DataBancoVenta[] = [];
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this. getBancoVenta();
  }
  getBancoVenta(){

    this.mantenientoservice.getBancoVenta()
   .subscribe(resp => {
    this.dataSource.data = resp as DataBancoVenta[]; 
    this.bancoventa = resp;
 
  });
 } 
 openForEdit(bancoId: number) {

  this.router.navigate(['mantenimientos/bancoventa/'+bancoId]);
}
Activar(form: DataBancoVenta, i: number) {
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
        .ActivarBancoVenta(form.id, bodyform)
        .subscribe((resp) => {
          this.toastr.success('Activo');
          this.ngOnInit();
        });
    }
  });
}
Inactivar(form: DataBancoVenta, i: number) {
  Swal.fire({
    title: 'Esta seguro que desea Anular?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantenientoservice
        .InactivarBancoVenta(form.id)
        .subscribe((resp) => {
          this.toastr.error('Inactivo');
          this.ngOnInit();
        });
    }
  });
}
}
