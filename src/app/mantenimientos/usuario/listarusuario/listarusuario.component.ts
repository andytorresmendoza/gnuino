import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import { DataUsuario } from '../../../models/usuario';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResetusuarioComponent } from '../resetusuario/resetusuario.component';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {
 
 displayedColumns: string[] = ['username','Nombre Empleado','tipo_usuario', 'Estado','details','Activar', 'Inactivar' ,'contrasena'];
 dataSource = new MatTableDataSource<DataUsuario>();
  usuarios:DataUsuario[]=[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService,   private dialog: MatDialog ) { }

  ngOnInit(): void {
    
    this.getUsuario();
  }
  getUsuario(){

    this.mantenientoservice.getUsuario()
   .subscribe(resp => { 
    this.dataSource.data = resp as DataUsuario[];  
    this.usuarios = resp[0];
    // console.log(this.usuarios);
  });
 } 
 openForEdit(id: number) {

  this.router.navigate(['mantenimientos/editusuario/'+id]);
}

Activar(form: DataUsuario, i: number) {
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
        .ActivarUsuario(form.id, bodyform)
        .subscribe((resp) => {
          this.toastr.success('Activo');
          this.ngOnInit();
        });
    }
  });
}
Inactivar(form: DataUsuario, i: number) {
  Swal.fire({
    title: 'Esta seguro que desea Anular?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantenientoservice
        .InactivarUsuario(form.id)
        .subscribe((resp) => {
          this.toastr.error('Inactivo');
          this.ngOnInit();
        });
    }
  });
}
Reset( id) {
  // console.log(id,'vista');
 const dialogConfig = new MatDialogConfig();
 dialogConfig.autoFocus = true;
 dialogConfig.disableClose = true;
 dialogConfig.width = "45%";
 dialogConfig.data = { id };
    this.dialog.open(ResetusuarioComponent, dialogConfig).afterClosed().subscribe(resp=>{

  });

 }
}
