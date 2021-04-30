import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataDepartamento, DataProvincia, DataDistrito } from '../../../models/countries';
import { PaisI } from '../../../models/pais';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';

@Component({
  selector: 'app-editaralmacen',
  templateUrl: './editaralmacen.component.html',
  styleUrls: ['./editaralmacen.component.css']
})
export class EditaralmacenComponent implements OnInit {
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
  public almacenes: DataTipoAlmacen[]=[];
  cargando = true; 
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
    this.mantenimientosService.getTipoAlmacenId(+id)
    .subscribe(data=>{
         console.log('editar',data);
       this.almacenes  = data;
      
    })
  }
  Actualizar(almacenes:DataTipoAlmacen){
    // console.log('component',almacenes[0].id);
    this.mantenimientosService.updateTipoAlmacen(almacenes)
    .subscribe(data=>{

      console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.almacenes[0].nombre_alamcen,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listaralmacen"]);

      // this.proveedores[0] = data;

    })
  } 
}
