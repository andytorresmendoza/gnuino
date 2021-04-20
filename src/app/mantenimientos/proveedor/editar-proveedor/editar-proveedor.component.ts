import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {
  DataDepartamento,
  DataProvincia,
  DataDistrito,
} from '../../../models/countries';
import { PaisI } from '../../../models/pais';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataProveedor } from '../../../models/proveedor';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css'],
})
export class EditarProveedorComponent implements OnInit {
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
  public selectedprovincias: DataProvincia = {id:0, nombre_provincia:'',idDepartamento:0}
  public departamentos: DataDepartamento[] = [];
  public provincias: DataProvincia[] = [];
  public distritos: DataDistrito[] = [];
  public paises: PaisI[];
  public proveedores: DataProveedor[];
  constructor(
    private mantenimientosService: MantenimientosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Editar();
    this.getDepartamento();
    this.getPais();
   
  }

  getDepartamento() {
    this.mantenimientosService.getDepartamento().subscribe((response) => {
      this.departamentos = response;
    });
  }
 
  
  getPais(){ this.mantenimientosService.getPais().subscribe(
    data=>(this.paises=data) 
  ); }

   
  onSelectDepartamento(id:number):void{
    console.log('ID_proveed',id);
    this.mantenimientosService.getProvincia(id)
    .subscribe(response=>{  

      this.provincias = response;

    })
  } 
  onSelectProvincia(id:number):void{
    console.log('provincia',id);
   this.mantenimientosService.getDistrito(id)
     .subscribe(response=>{  

   this.distritos = response;
  //  console.log(response);

    })
  } 
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getProveedorId(+id)
    .subscribe(data=>{
         console.log('editar',data);
       this.proveedores  = data;
      
    })
  }
  Actualizar(proveedores:DataProveedor){
    console.log('component',proveedores[0].id);
    this.mantenimientosService.updateProveedor(proveedores)
    .subscribe(data=>{

      console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.proveedores[0].nombre_proovedor,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarproveedor"]);

      // this.proveedores[0] = data;

    })
  } 
}
