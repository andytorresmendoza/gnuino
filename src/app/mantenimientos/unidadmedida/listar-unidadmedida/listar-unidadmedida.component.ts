import { Component, OnInit } from '@angular/core';
import { DataUnidadMedida } from 'src/app/models/unidadmedida';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-unidadmedida',
  templateUrl: './listar-unidadmedida.component.html',
  styleUrls: ['./listar-unidadmedida.component.css']
})
export class ListarUnidadmedidaComponent implements OnInit {

  unidadmedidas: DataUnidadMedida[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getUnidadmedida()
    .subscribe(resp => {
      
       this.unidadmedidas = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(unidadmedida:DataUnidadMedida):void{
    localStorage.setItem("id",unidadmedida.id.toString());
    this.router.navigate(["../mantenimientos/editunidadmedida"]);
  
  }
}
