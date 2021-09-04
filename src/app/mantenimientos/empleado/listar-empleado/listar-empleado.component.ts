import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataEmpleado } from '../../../models/empleado';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css'],
})
export class ListarEmpleadoComponent implements OnInit {
  displayedColumns: string[] = [
    'Nombre', 
    'Perfil',
    'Sexo',
    'Dni',
    'Estado',
    'details',
    'Activar',
    'Inactivar'
  ];
  dataSource = new MatTableDataSource<DataEmpleado>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  empleados: DataEmpleado[] = [];
  // cargando = true;

  constructor(
    private mantenientoservice: MantenimientosService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.mantenientoservice.getEmpleado().subscribe((resp) => {
       console.log(resp);
      this.dataSource.data = resp as DataEmpleado[];
      this.empleados = resp;
      // this.cargando = false;
    });
  }

  openForEdit(id: number): void {
    this.router.navigate(['mantenimientos/addempleado/' + id]);
  }

  Activar(form: DataEmpleado, i: number) {
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
          .ActivarEmpleado(form.id, bodyform)
          .subscribe((resp) => {
            this.toastr.success('Activo');
            this.ngOnInit();
          });
      }
    });
  }
  Inactivar(form: DataEmpleado, i: number) {
    Swal.fire({
      title: 'Esta seguro que desea Anular?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.mantenientoservice
          .InactivarEmpleado(form.id)
          .subscribe((resp) => {
            this.toastr.error('Inactivo');
            this.ngOnInit();
          });
      }
    });
  }
}
