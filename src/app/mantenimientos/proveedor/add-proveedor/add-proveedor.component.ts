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
  constructor(private mantenimientosServices: MantenimientosService, private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }


  ngOnInit(): void {
  
    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientosServices.getProveedorId(+id).subscribe(res => {
         this.formData = res[0]; 
         console.log(res);
         //console.log(res[0].id,'id');
        // console.log( this.formData);


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
    validateForm(form:NgForm){
      if(form.value.idPais == null )
       return   Swal.fire({
          title: 'Seleccionar Pais' , 
          icon: 'error',
        });   
        else if  (form.value.idDepartamento == null )
        return   Swal.fire({
           title: 'Seleccionar Departamento' , 
           icon: 'error',
         });   
         else if  (form.value.idProvincia == null )
         return   Swal.fire({
            title: 'Seleccionar Provincia' , 
            icon: 'error',
          });   
          else if  (form.value.idDistrito == null )
         return   Swal.fire({
            title: 'Seleccionar Distrito' , 
            icon: 'error',
          });   
     
    }



  
  onSubmit(form:NgForm){ 
 this.validateForm(form);
// console.log(this.validateForm(),'ejecutar');
     if ( form.invalid ) {

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
          //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
    // console.log(control);
  
  if (this.formData.id) {
      this.mantenimientosServices.updateProveedor(this.formData).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../mantenimientos/listarproveedor"]);
        }
      )
  } 
  else{

     this.mantenimientosServices.addProveedor(this.formData).subscribe(res =>{
    //console.log(res);
      this.resetForm();
      this.toastr.success('Guardado Exitosamente','Gnuino');
      this.router.navigate(["../mantenimientos/listarproveedor"]);
    }) ;
 }
}
/*AddProveedor(proveedores: ProveedorI):void{
    console.log('entro',proveedores);
    // this.nrocuentas[0].id = 22;
  this.mantenimientosServices.addProveedor(proveedores)
    .subscribe(res=>{
     console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarproveedor"]);
     
      
    });
  
   
  
  }*/
}