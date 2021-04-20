import { Component, OnInit } from '@angular/core';
import { DataEstadoFlujo } from 'src/app/models/estadoflujo';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-estadoflujo',
  templateUrl: './listar-estadoflujo.component.html',
  styleUrls: ['./listar-estadoflujo.component.css']
})
export class ListarEstadoflujoComponent implements OnInit {
  estadoflujos: DataEstadoFlujo[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getEstadoFlujo()
    .subscribe(resp => {
      
       this.estadoflujos = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(estado:DataEstadoFlujo):void{
    localStorage.setItem("id",estado.id.toString());
    this.router.navigate(["../mantenimientos/editestadoflujo"]);
  
  }
}