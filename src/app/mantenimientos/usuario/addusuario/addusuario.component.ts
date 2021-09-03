import { Component, OnInit } from '@angular/core';
 
import { DataEmpleado } from '../../../models/empleado';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import Swal from 'sweetalert2';
import { UsuarioForm, DataUsuario } from '../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {
  empleados: DataEmpleado[] = []; 
  formData: DataUsuario; 
  public formSubmitted = false;
 
  constructor(private mantenimientosServices: MantenimientosService, private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void { 
      this.resetForm(); 
 
this.mantenimientosServices.getEmpleado().subscribe(resp => {
  // console.log(resp);
  this.empleados = (resp as DataEmpleado[])
  .map(empleados=>{ 
    empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado,'- ',empleados.dni_empleado))
    return empleados;
  });
});
  }

  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={   
      id: null,
      username: '',
      password: '',
      idEmpleado: null
    

 }; 
}

onSubmit(form:NgForm):void{
  if (form.invalid) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched(); //es para validar el guardar
      //  console.log(control); //son todos mis controles del formulario
    });

    return;
  }
   
else{
  this.mantenimientosServices.CrearUsuario(this.formData).subscribe(res =>{
 //console.log(res);
   this.resetForm();
   this.toastr.success('Guardado Exitosamente','Gnuino');
   this.router.navigate(["../mantenimientos/listarusuarios"]);
 }) ;
  }
}

/*crearUsuario(){
  this.formSubmitted = true;
   console.log(this.registerForm.value);
  if(this.registerForm.invalid){
     console.log(this.registerForm.invalid);
    return;
  } 
  this.mantenimientosService.CrearUsuario(this.registerForm.value)
  .subscribe(resp=>{
  },(err)=>{
    console.log(err.error);
    Swal.fire({
      title: 'Usuario Registrado' , 
      icon: 'error',
    }); 
   }
  )
}
campoNoValido(campo:string):boolean{
 if(this.registerForm.get(campo).invalid && this.formSubmitted){
   return true;
 }else{
   return false;
 }
  
}

contrasenasNoValidas() {
  const pass1 = this.registerForm.get('password').value;
  const pass2 = this.registerForm.get('password2').value;

  if ( (pass1 !== pass2) && this.formSubmitted ) {
    return true;
  } else {
    return false;
  }

}


  passwordsIguales(pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => { 
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }


    }
  }
  validateCombo() {

    const comboEmpleado = this.registerForm.get('idEmpleado').value;

  if ( (comboEmpleado ===  '' || comboEmpleado ===  0  ) && this.formSubmitted ) { 
      return  true; 
    }else{
      false;
    }
  
  }
*/
}
