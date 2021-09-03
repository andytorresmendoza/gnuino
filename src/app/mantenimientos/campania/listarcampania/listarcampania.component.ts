import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table'; 
import { DataCampaniaVenta } from '../../../models/campaniaVenta';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listarcampania',
  templateUrl: './listarcampania.component.html',
  styleUrls: ['./listarcampania.component.css']
})
export class ListarcampaniaComponent implements OnInit {
  displayedColumns: string[] = ['Campaña Venta',  'Estado','details', 'Activar','Inactivar'];
  dataSource = new MatTableDataSource<DataCampaniaVenta>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  campania: DataCampaniaVenta[] = [];
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService) { }


  ngOnInit(): void {
    this.mantenientoservice.getCampaniaVenta()
    .subscribe(resp => {
     this.dataSource.data = resp as DataCampaniaVenta[]; 
     this.campania = resp;
  // console.log(resp);
   });
  }
  openForEdit(campaniaId: number) {

    this.router.navigate(['mantenimientos/campania/'+campaniaId]);
  }
  Activar(form: DataCampaniaVenta, i: number) {
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
          .ActivarCampaniaVenta(form.id, bodyform)
          .subscribe((resp) => {
            this.toastr.success('Activo');
            this.ngOnInit();
          });
      }
    });
  }
  Inactivar(form: DataCampaniaVenta, i: number) {
    Swal.fire({
      title: 'Esta seguro que desea Anular?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.mantenientoservice
          .InactivarCampaniaVenta(form.id)
          .subscribe((resp) => {
            this.toastr.error('Inactivo');
            this.ngOnInit();
          });
      }
    });
  }
}
