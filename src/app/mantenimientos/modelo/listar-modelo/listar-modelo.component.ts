import { Component, OnInit } from '@angular/core';
import { DataModelo } from 'src/app/models/modelo';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-modelo',
  templateUrl: './listar-modelo.component.html',
  styleUrls: ['./listar-modelo.component.css']
})
export class ListarModeloComponent implements OnInit {
  modelos: DataModelo[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getModelo()
    .subscribe(resp => {
      
       this.modelos = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(modelo:DataModelo):void{
    localStorage.setItem("id",modelo.id.toString());
    this.router.navigate(["../mantenimientos/editmodelo"]);
  
  }
}
