import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';

@Component({
  selector: 'app-listaralmacen',
  templateUrl: './listaralmacen.component.html',
  styleUrls: ['./listaralmacen.component.css']
})
export class ListaralmacenComponent implements OnInit {

almacenes: DataTipoAlmacen[]=[];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getTipoAlmacen()
    .subscribe(resp => {
      
       this.almacenes = resp; 
      this.cargando = false;
      console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(almacenes:DataTipoAlmacen):void{
    localStorage.setItem("id",almacenes.id.toString());
    this.router.navigate(["../mantenimientos/editalmacen"]);
  
  }

}
