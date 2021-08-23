import { Component, OnInit } from '@angular/core';
import { DataBanco } from '../../../models/banco';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataDepartamento,  DataDistrito, DataProvincia } from 'src/app/models/countries';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoI } from 'src/app/models/producto';
import {  PaisI } from 'src/app/models/pais';
import { observable } from 'rxjs';
import { ProveedorI, DataProveedor } from '../../../models/proveedor';
import { DataTipodocumento } from '../../../models/tipodocumento';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
 

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {
  public distritos: DataDistrito[] = [];
  public paises: PaisI[];
  public departamentos: DataDepartamento[] = [];  
  public provincias: DataProvincia[] = [];
  public formData : DataProveedor;
  tipodocumentos: DataTipodocumento[] = [];
  cargando = true; 
  isValid:boolean = true;
  isButtonVisible:boolean=true; 
  isPais:boolean=true; 
  constructor(private mantenimientosServices: MantenimientosService, private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }


  ngOnInit(): void {
  
    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientosServices.getProveedorId(+id).subscribe(res => {
         this.formData = res[0];  


      });
    }else{
     this.resetForm();

}
this.getPais();
this.getDepartamento(); 
  this.getProvinciaAll();
  this.getDistritoAll();
  }

 
  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={        
      id:null,
      nombre_proovedor: '',
      ruc_proovedor: '',
      telefono_proovedor:'',
      direccion_proovedor: '',
      email_proovedor: '',
      idPais: null,
      idProvincia: null,
      idDistrito: null,
      idDepartamento:null
      
     
  }; 
  }  

getPais(){ this.mantenimientosServices.getPais().subscribe(
    data=>
    ( 
      this.paises=data 
      ) 
   
  ); 
}

 
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
    validateForm(form:NgForm){
      if(form.value.idPais == null )
       return   Swal.fire({
          title: 'Seleccionar Pais' , 
          icon: 'error',
        });   
       
       else if  (form.value.idPais == 177 ){  
        if  (form.value.idDepartamento == null || form.value.idDepartamento == 0 || form.value.idProvincia == null || form.value.idProvincia == 0 || form.value.idDistrito == null || form.value.idDistrito == 0 )
 
        return   Swal.fire({
           title: 'Seleccionar Departamento - Provincia - Distrito' , 
           icon: 'error',
         });    
       }
   return;
     
    }



  
  onSubmit(form:NgForm){ 
    console.log(form.value);
  if (this.validateForm(form)){
    return;
   }
   else 
   if ( form.invalid ) {

    Object.values( form.controls ).forEach( control => {
      control.markAsTouched();  
     });

    return;
  }  else if(form.value.idPais == 177
     ){ 
    const bodyform = {
      id:form.value.id, nombre_proovedor:form.value.nombre_proovedor, 
      ruc_proovedor:form.value.ruc_proovedor, 
      telefono_proovedor:form.value.telefono_proovedor,
      direccion_proovedor:form.value.direccion_proovedor,
      email_proovedor:form.value.email_proovedor,
      idPais:form.value.idPais,
      idProvincia:form.value.idProvincia,
      idDistrito:form.value.idDistrito,
      idDepartamento:form.value.idDepartamento,
      estado:'1'
    } 
    if (this.formData.id) {
      this.mantenimientosServices.updateProveedor(bodyform).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../mantenimientos/listarproveedor"]);
        }
      )
  } 
  else{

     this.mantenimientosServices.addProveedor(bodyform).subscribe(res =>{
    //console.log(res);
      this.resetForm();
      this.toastr.success('Guardado Exitosamente','Gnuino');
      this.router.navigate(["../mantenimientos/listarproveedor"]);
    }) ;
 }
 
  } else{
    const bodyform = {
      id:form.value.id, nombre_proovedor:form.value.nombre_proovedor, 
      ruc_proovedor:form.value.ruc_proovedor, 
      telefono_proovedor:form.value.telefono_proovedor,
      direccion_proovedor:form.value.direccion_proovedor,
      email_proovedor:form.value.email_proovedor,
      idPais:form.value.idPais,
      idProvincia:0,
      idDistrito:0,
      idDepartamento:0,
      estado:'1'
    } 
   
    if (this.formData.id) {
   
      this.mantenimientosServices.updateProveedor(bodyform).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../mantenimientos/listarproveedor"]);
        }
      )
  } 
  else{

     this.mantenimientosServices.addProveedor(bodyform).subscribe(res =>{
    //console.log(res);
      this.resetForm();
      this.toastr.success('Guardado Exitosamente','Gnuino');
      this.router.navigate(["../mantenimientos/listarproveedor"]);
    }) ;
 }
   
  }

 
}
 
}