import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PaisI } from '../../../models/pais';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { EmpleadoI, DataEmpleado } from '../../../models/empleado';
import { DataTipodocumento } from '../../../models/tipodocumento';
import { DataPerfilusuario } from '../../../models/perfilUsuario';
// import * as _moment from 'moment';
// import { Moment } from 'moment';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
  loginForm = new FormGroup({
    nombre_empleado: new FormControl('', Validators.required),
    apellidos_pat_empleado: new FormControl('', Validators.required),
    apellidos_mat_empleado: new FormControl('', Validators.required),
    sexo_empleado: new FormControl('', Validators.required),
    dni_empleado: new FormControl('', Validators.required),   
    direccion_empleado: new FormControl('', Validators.required),
    email_empleado: new FormControl('', Validators.required),
    fecha_empleado: new FormControl('', Validators.required),
    idTipoDocumento: new FormControl('', Validators.required), 
    idPerfilUsuario: new FormControl('', Validators.required), 
    idPais: new FormControl('', Validators.required), 
  });

  public paises: PaisI[];
  tipodocumentos: DataTipodocumento[] = []; 
  perfiles: DataPerfilusuario[] = [];
  empleados: DataEmpleado[]=[];
  selectedprovincias: DataEmpleado;
  constructor(private mantenimientosServices: MantenimientosService
    , private router:Router) { }
 
  ngOnInit(): void {
    this.getPais();
    this.getTipodocumento();
    this.getPerfilusuario();
    // console.log(moment().format('YYYY-MM-DD');
  }
 
onChangeEvent(event){

    const m = moment(event.value);
    event = m.format("YYYY-MM-D" );
    // console.log(event);
 this.selectedprovincias = event;
   console.log(event);
 
}
 
  getPais(){ this.mantenimientosServices.getPais().subscribe(
    data=>(this.paises=data) 
  ); }


 getTipodocumento(){ this.mantenimientosServices.getTipodocumento()
  .subscribe(resp => {
    
     this.tipodocumentos = resp; 
 },(err)=>{
   console.log('Error');
 });
}

getPerfilusuario(){this.mantenimientosServices.getPerfilusuario()
.subscribe(resp => {
  
   this.perfiles = resp; 

},(err)=>{
 console.log('Erro en la categoria');
});
}
  
  AddEmpleado(empleados: EmpleadoI):void{
    console.log('entro',empleados);
    // this.nrocuentas[0].id = 22;
  this.mantenimientosServices.addEmpleado(empleados)
    .subscribe(res=>{
     console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarempleado"]);
     
      
    });
  
   
  
  }
 
}
