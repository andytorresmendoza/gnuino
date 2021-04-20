import { Component, OnInit } from '@angular/core';
import { DataTipodevolucion } from '../../../models/tipodevolucion';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tipodevolucion',
  templateUrl: './listar-tipodevolucion.component.html',
  styleUrls: ['./listar-tipodevolucion.component.css']
})
export class ListarTipodevolucionComponent implements OnInit {
  tipodevoluciones: DataTipodevolucion[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getTipoDevolucion()
    .subscribe(resp => {
      
       this.tipodevoluciones = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(tipodevolucion:DataTipodevolucion):void{
    localStorage.setItem("id",tipodevolucion.id.toString());
    this.router.navigate(["../mantenimientos/edittipodevolucion"]);
  
  }
}
