import { Component, OnInit } from '@angular/core';
import { DataNrocuenta, NrocuentaI } from 'src/app/models/nrocuenta';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listar-nrocuenta',
  templateUrl: './listar-nrocuenta.component.html',
  styleUrls: ['./listar-nrocuenta.component.css']
})
export class ListarNrocuentaComponent implements OnInit {
  displayedColumns: string[] = ['Nro de Cuenta','Empleado Cuenta','Estado','details','Activar', 'Inactivar'];
  dataSource = new MatTableDataSource<DataNrocuenta>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 nrocuentas: DataNrocuenta[] = [];
  // cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router,  private toastr: ToastrService) { }
 

  ngOnInit(): void {

 
    this.mantemientosService.getNroCuenta()
    .subscribe(resp => {
      this.dataSource.data = resp as DataNrocuenta[]; 
  this.nrocuentas = resp;
      // this.cargando = false;
    //  console.log(resp);
  
   });
    
 }

//  getNroCuenta(){

//  }
 
/*Editar(nrocuenta:DataNrocuenta):void{
  localStorage.setItem("id",nrocuenta.id.toString());
  this.router.navigate(["../mantenimientos/editnrocuenta"]);

}*/
openForEdit(nrocuenta: number) {

  this.router.navigate(['mantenimientos/addnrocuenta/'+nrocuenta]);
}

Activar(form: DataNrocuenta, i: number) {
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
        .ActivarNroCuenta(form.id, bodyform)
        .subscribe((resp) => {
          this.toastr.success('Activo');
          this.ngOnInit();
        });
    }
  });
}
Inactivar(form: DataNrocuenta, i: number) {
  Swal.fire({
    title: 'Esta seguro que desea Anular?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantemientosService
        .InactivarNroCuenta(form.id)
        .subscribe((resp) => {
          this.toastr.error('Inactivo');
          this.ngOnInit();
        });
    }
  });
}

/*no se usa */
// Delete(nrocuentas:DataNrocuenta, i: number  ){
// //  console.log('component',nrocuentas.id);
//   Swal.fire({
//     title: 'Esta seguro?',
//  text: `Esta seguro que desea borrar a ${nrocuentas.descripcion_cuenta}`,
//     icon: 'question',
//     showConfirmButton: true,
//     showCancelButton: true,
//   }).then((resp) => {
//     if (resp.value) { 
     
//        this.mantemientosService.deleteNroCuenta(nrocuentas).subscribe();
//     }
//   });
// }
 
}
