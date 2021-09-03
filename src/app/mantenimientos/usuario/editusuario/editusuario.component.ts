import { Component, OnInit } from '@angular/core';
 
import { DataEmpleado } from '../../../models/empleado';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import Swal from 'sweetalert2';
import { UsuarioForm, DataUsuario } from '../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {
  empleados: DataEmpleado[] = []; 
  formData: DataUsuario; 
  constructor(private mantenimientosServices: MantenimientosService, private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');  
      this.mantenimientosServices.getUsuariobyId(+id).subscribe(res => {
       this.formData= res[0]; 
       this.formData.idEmpleado = parseInt(res[0].idEmpleado); 
      });
     
 
this.mantenimientosServices.getEmpleado().subscribe(resp => {
  // console.log(resp);
  this.empleados = (resp as DataEmpleado[])
  .map(empleados=>{ 
    empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado,'- ',empleados.dni_empleado))
    return empleados;
  });
});
  }
  onSubmit(form:NgForm):void{
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
      });
  
      return;
    }
   else if (this.formData.id) {
 
      this.mantenimientosServices.updateUsuario(this.formData).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../mantenimientos/listarusuarios"]);
        }
      )
  } 

  }
}
