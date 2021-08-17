import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDepartamento,  DataDistrito, DataProvincia } from 'src/app/models/countries'; 
import {  PaisI } from 'src/app/models/pais'; 
import { DataCliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';
import { DataTipodocumento } from 'src/app/models/tipodocumento';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
 
  public distritos: DataDistrito[] = [];
  public paises: PaisI[];
  public departamentos: DataDepartamento[] = [];  
  public provincias: DataProvincia[] = [];
  public formData : DataCliente;
  tipodocumentos: DataTipodocumento[] = [];
  
  cargando = true; 
  isValid: boolean = true;
  constructor(private mantenimientosServices: MantenimientosService, private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientosServices.getClientebyId(+id).subscribe(res => {
         this.formData = res[0]; 
         //console.log(res[0].id,'id');
        // console.log( this.formData);


      });
    }else{
      this.resetForm();

}

this.mantenimientosServices.getTipodocumento()
.subscribe(resp => {
  
   this.tipodocumentos = resp;
  this.cargando = false; 

});



  this.getDepartamento(); 
  this.getProvinciaAll();
  this.getDistritoAll();
    this.getPais();
  }



  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={        
      id:null,
      nombre_cliente: '',
      apellidos_pat_cliente: '',
      apellidos_mat_cliente:'',
      sexo_cliente: '',
      dni_cliente: '',
      direccion_cliente: '',
      telefono_cliente: '',
      email_cliente: '',
      idTipoDocumento:null,
      idPais: null,
      idDepartamento: null,
      idProvincia:null,
      idDistrito:null,
     
  }; 
  } 

  getPais(){ this.mantenimientosServices.getPais().subscribe(
    data=>(this.paises=data) 
   
  ); }
  

  getDepartamento(){ 
 this.mantenimientosServices.getDepartamento()
  .subscribe(response => { 
     this.departamentos = response;  
    this.cargando = false; 
  }
);
} 


 
getProvinciaAll(){ 
  this.mantenimientosServices.getProvinciaAll()
   .subscribe(response => { 
      this.provincias = response;  
     this.cargando = false; 
   }
 );
 } 

 getDistritoAll(){ 
  this.mantenimientosServices.getDistritoAll()
   .subscribe(response => { 
      this.distritos = response;  
     this.cargando = false; 
   }
 );
 } 
  onSelectDepartamento($event:any):void{
 
    this.mantenimientosServices.getProvincia($event)
    .subscribe(response=>{   
    //  console.log(response,'response');
      this.provincias = response;

    });
  } 
  onSelectProvincia($event:any):void{
   
   this.mantenimientosServices.getDistrito($event)
     .subscribe(response=>{  

      this.distritos = response;
    //  console.log(response);

    });
  } 
  validateForm(form:NgForm) {
    if(form.value.idTipoDocumento == null )
       return   Swal.fire({
          title: 'Seleccionar Tipo Documento' , 
          icon: 'error',
        });  
       else if(form.value.idPais == null )
        return   Swal.fire({
           title: 'Seleccionar Pais' , 
           icon: 'error',
         });  
         else if(form.value.idDepartamento == null )
         return   Swal.fire({
            title: 'Seleccionar Departamento' , 
            icon: 'error',
          });  
          else if(form.value.idProvincia == null )
          return   Swal.fire({
             title: 'Seleccionar Provincia' , 
             icon: 'error',
           });
           else if(form.value.idDistrito == null )
           return   Swal.fire({
              title: 'Seleccionar Distrito' , 
              icon: 'error',
            });  
      }
 onSubmit(form:NgForm):void{
    console.log(form.value);
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
      });

      return;
    }
    else if(this.validateForm(form)){
      return ;
    }
    if (this.formData.id) {
      this.mantenimientosServices.updateCliente(this.formData).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../mantenimientos/listarcliente"]);
        }
      )
  } 
  else{

     this.mantenimientosServices.saveCliente(this.formData).subscribe(res =>{
    //console.log(res);
      this.resetForm();
      this.toastr.success('Guardado Exitosamente','Gnuino');
      this.router.navigate(["../mantenimientos/listarcliente"]);
    }) ;
 }
}
}
