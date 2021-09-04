import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { PaisI } from '../../../models/pais';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadoI, DataEmpleado } from '../../../models/empleado';
import { DataTipodocumento } from '../../../models/tipodocumento';
import { DataPerfilusuario } from '../../../models/perfilUsuario';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
 

  public paises: PaisI[];
  tipodocumentos: DataTipodocumento[] = []; 
  perfiles: DataPerfilusuario[] = [];
  empleados: DataEmpleado[]=[];
  formData: DataEmpleado; 
  constructor(private mantenimientosServices: MantenimientosService
    , private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }

 
  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientosServices.getEmpleadoId(+id).subscribe(res => {
         this.formData = res[0];  
         console.log(this.formData.id,'data');
        });
      }else{
        this.resetForm(); 
  }
    this.getPais();
    this.getTipodocumento();
    this.getPerfilusuario();
   
  }

  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={        
      id:null,
      nombre_empleado: '',
      apellidos_pat_empleado: '',
      apellidos_mat_empleado:'',
      sexo_empleado:'',
      dni_empleado: '',
      direccion_empleado: '',
      email_empleado: '',
      fecha_empleado: '',
      idTipoDocumento:0,
      idPerfilUsuario: null,
      idPais:null,
      estado:0 
  }; 
 
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
validateSelect(form:NgForm) {
  if(form.value.idPerfilUsuario == null )
     return   Swal.fire({
        title: 'Seleccionar Perfil' , 
        icon: 'error', 
      }); 
      else   if(form.value.idPais == null )
      return   Swal.fire({
         title: 'Seleccionar Pais' , 
         icon: 'error', 
       }); 

      
        
    } 
onSubmit(form: NgForm):void{ 
  if (form.invalid) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();  
    });

    return; }
 else if (this.validateSelect(form)){
    return;
   }
  
 else if (this.formData.id) {
  
   this.mantenimientosServices.updateEmpleado(this.formData).subscribe(
     resp=>{

     this.toastr.success('Actualizado Exitosamente','Gnuino');
   this.router.navigate(["../../mantenimientos/listarempleado"]);
     }
   )
} 
else{
 
    let fechaParseada: any;
    fechaParseada = moment(form.value.fecha_empleado).format('YYYY-MM-DD');
    form.value.fecha_empleado = fechaParseada;  
    this.formData = form.value;
  this.mantenimientosServices.addEmpleado(this.formData)
    .subscribe(res=>{
     console.log(res);
      Swal.fire({ 
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarempleado"]);
     
      
    });
  
  }
  
  }
 
}
