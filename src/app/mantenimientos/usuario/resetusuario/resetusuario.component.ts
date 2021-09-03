 
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataEmpleado } from '../../../models/empleado';
import { DataUsuario } from '../../../models/usuario';
import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialog , MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-resetusuario',
  templateUrl: './resetusuario.component.html',
  styleUrls: ['./resetusuario.component.css']
})
export class ResetusuarioComponent implements OnInit {
  empleados: DataEmpleado[] = []; 
  formDataUser: DataUsuario; 

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DataUsuario>,
  private mantenimientosServices: MantenimientosService, 
  private router:Router,
  private currentRoute: ActivatedRoute,
  private toastr: ToastrService, 
   private dialog: MatDialog) { }

  ngOnInit(): void {

    this.mantenimientosServices.getUsuariobyId(this.data.id).subscribe(res => {
    //  console.log(res);
      this.formDataUser= res[0]; 
      // this.formDataUser.idEmpleado = parseInt(res[0].idEmpleado);
   });


 
  }
 onSubmit(form: NgForm) {
  //  console.log(form.value);
  if (form.invalid) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched(); //es para validar el guardar
    });

    return;
  } 
  else{
   this.mantenimientosServices.ChangePasswordUsuario(this.formDataUser).subscribe(res =>{
      //console.log(res);
       
        this.toastr.success('Guardado Exitosamente','Gnuino');
        this.ngOnInit();
          // this.router.navigate(["../mantenimientos/listarusuarios"]);
      }) ; 
    this.dialogRef.close();
  }
 }

}
