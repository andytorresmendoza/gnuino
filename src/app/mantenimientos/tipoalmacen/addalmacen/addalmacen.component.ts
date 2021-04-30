import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataDepartamento, DataProvincia, DataDistrito } from '../../../models/countries';
import { PaisI } from '../../../models/pais';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { TipoAlmacenI } from '../../../models/tipoalmacen';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addalmacen',
  templateUrl: './addalmacen.component.html',
  styleUrls: ['./addalmacen.component.css']
})
export class AddalmacenComponent implements OnInit {
  loginForm = new FormGroup({
    nombre_alamcen: new FormControl('', Validators.required),
    cod_alamcen: new FormControl('', Validators.required),
    direccion_almacen: new FormControl('', Validators.required),
    idDepartamento: new FormControl('', Validators.required),
    idProvincia: new FormControl('', Validators.required),
    idDistrito: new FormControl('', Validators.required),
    idPais: new FormControl('', Validators.required), 
    tipoAlmacen: new FormControl('', Validators.required), 
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
AddTipoAlmacen(almacenes: TipoAlmacenI):void{
  console.log('entro',almacenes);
  // this.nrocuentas[0].id = 22;
this.mantenimientosServices.addTipoAlmacen(almacenes)
  .subscribe(res=>{
   console.log(res);
    Swal.fire({
      //  title: this.nrocuentas[0].descripcion_cuenta,
      text: 'Se Guardo correctamente',
      icon: 'success',
    });
    this.router.navigate(["../mantenimientos/listaralmacen"]);
   
    
  });

 

}
}
