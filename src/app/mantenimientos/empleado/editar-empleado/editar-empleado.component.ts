import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PaisI } from '../../../models/pais';
import { DataTipodocumento } from '../../../models/tipodocumento';
import { DataPerfilusuario } from '../../../models/perfilUsuario';
import { DataEmpleado } from '../../../models/empleado';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})

export class EditarEmpleadoComponent implements OnInit {
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
  constructor(
    private mantenimientosService: MantenimientosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Editar();
    this.getPais();
    this.getTipodocumento();
    this.getPerfilusuario();
  }
  getPais(){ this.mantenimientosService.getPais().subscribe(
    data=>(this.paises=data) 
  ); }


 getTipodocumento(){ this.mantenimientosService.getTipodocumento()
  .subscribe(resp => {
    
     this.tipodocumentos = resp; 
 },(err)=>{
   console.log('Error');
 });
}

getPerfilusuario(){this.mantenimientosService.getPerfilusuario()
.subscribe(resp => {
  
   this.perfiles = resp; 

},(err)=>{
 console.log('Erro en la categoria');
});
}

onChangeEvent(event){

  const m = moment(event.value);
  event = m.format("YYYY-MM-D" );
  // console.log(event);
this.empleados[0].fecha_empleado = event;
  // console.log(this.empleados[0].fecha_empleado);
  // if(m){
  //        event = m.format("YYYY-MM-D");
  //     //  this.empleados[0].fecha_empleado = event;
  //     return event;
  //       console.log(event);
  //   }
// this.empleados[0].fecha_empleado = event;
 

}
Editar(){
  let id=localStorage.getItem("id");
  this.mantenimientosService.getEmpleadoId(+id)
  .subscribe(data=>{
       console.log('editar',data);
     this.empleados  = data;
    
  })
}
Actualizar(empleados:DataEmpleado){
  console.log('component',empleados[0].id);
  this.mantenimientosService.updateEmpleado(empleados)
  .subscribe(data=>{

    // console.log('actualizar',data);
    // alert("se actualizo");
    Swal.fire({
      title: this.empleados[0].nombre_empleado,
      text: 'Se actualizo correctamente',
      icon: 'success',
    });
    // console.log(data);
    this.router.navigate(["../mantenimientos/listarempleado"]);

    // this.proveedores[0] = data;

  })
} 
}
