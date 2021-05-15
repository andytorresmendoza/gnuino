import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataEmpleado } from '../../../models/empleado';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {
  empleados: DataEmpleado[] = [];
  public formSubmitted = false;
  public registerForm = this.fb.group({
    nombre: ['Fernando', Validators.required ],
    // email: ['test100@gmail.com', [ Validators.required, Validators.email ] ],
    password: ['123456', Validators.required ],
    password2: ['123456', Validators.required ],
    idTipoEmpleado: ['', Validators.required],
    // terminos: [ true, Validators.required ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });
  constructor(private fb: FormBuilder,private mantenimientosService: MantenimientosService) { }

  ngOnInit(): void {
    this.mantenimientosService.getEmpleado()
    .subscribe(resp => { 
       this.empleados = resp;  
    })
  }
crearUsuario(){
  this.formSubmitted = true;
  console.log(this.registerForm.value);
  if(this.registerForm.invalid){
    return;
  }

  //realizar posteo
  this.mantenimientosService.CrearUsuario(this.registerForm.value);
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
    const comboEmpleado = this.registerForm.get('idTipoEmpleado').value;
    if ( (comboEmpleado !==  0) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

}
