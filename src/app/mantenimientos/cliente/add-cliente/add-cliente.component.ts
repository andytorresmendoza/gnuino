import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDepartamento,  DataDistrito, DataProvincia } from 'src/app/models/countries';
import Swal from 'sweetalert2';
import {  PaisI } from 'src/app/models/pais';
import { ProveedorI } from '../../../models/proveedor';
import { DataCliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';
import { DataTipodocumento } from 'src/app/models/tipodocumento';
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
  constructor(private mantenimientosServices: MantenimientosService, private router:Router,private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.mantenimientosServices.getClientebyId(+id).subscribe(res => {
         this.formData = res[0]; 
         console.log( this.formData);


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
      sexo_cliente:'',
      dni_cliente: 0,
      direccion_cliente: '',
      telefono_cliente: 0,
      email_cliente: '',
      idTipoDocumento:0,
      idPais: 0,
      idDepartamento: 0,
      idProvincia:0,
      idDistrito:0,
      estado:0 
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

  onSelectDepartamento($event:any):void{
    //colocar una condicional
 
    // console.log('ID_proveed',id);
    this.mantenimientosServices.getProvincia($event)
    .subscribe(response=>{   
      console.log(response,'response');
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

  

  onSubmit(proveedores: ProveedorI):void{
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
  
   
  
  }
}
