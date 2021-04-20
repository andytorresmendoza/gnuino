import { Component, OnInit } from '@angular/core';
import { DataBanco } from '../../../models/banco';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataDepartamento,  DataDistrito, DataProvincia } from 'src/app/models/countries';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoI } from 'src/app/models/producto';
import {  PaisI } from 'src/app/models/pais';
import { observable } from 'rxjs';
import { ProveedorI } from '../../../models/proveedor';
 

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {
  loginForm = new FormGroup({
    nombre_proovedor: new FormControl('', Validators.required),
    ruc_proovedor: new FormControl('', Validators.required),
    telefono_proovedor: new FormControl('', Validators.required),
    direccion_proovedor: new FormControl('', Validators.required),
    email_proovedor: new FormControl('', Validators.required),   
    idDepartamento: new FormControl('', Validators.required),
    idProvincia: new FormControl('', Validators.required),
    idDistrito: new FormControl('', Validators.required),
    idPais: new FormControl('', Validators.required), 
  });


  
 public selectedCountry: DataDepartamento = {id:0, nombre:''};
  public departamentos: DataDepartamento[] = [];  
  public provincias: DataProvincia[] = [];
  public selectedprovincias: DataProvincia = {id:0, nombre_provincia:'',idDepartamento:0}
  public distritos: DataDistrito[] = [];
  public paises: PaisI[];
 
  
  cargando = true; 
 
  constructor(private mantenimientosServices: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
   
 this.getDepartamento();
 this.getPais();

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
 
 
  onSelectDepartamento(id:number):void{
    console.log('ID_proveed',id);
    this.mantenimientosServices.getProvincia(id)
    .subscribe(response=>{  

      this.provincias = response;

    })
  } 
  onSelectProvincia(id:number):void{
    console.log('provincia',id);
   this.mantenimientosServices.getDistrito(id)
     .subscribe(response=>{  

   this.distritos = response;
  //  console.log(response);

    })
  } 

  AddProveedor(proveedores: ProveedorI):void{
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