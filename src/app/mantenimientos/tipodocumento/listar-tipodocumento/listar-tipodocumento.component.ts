import { Component, OnInit } from '@angular/core';
import { DataTipodocumento } from 'src/app/models/tipodocumento';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tipodocumento',
  templateUrl: './listar-tipodocumento.component.html',
  styleUrls: ['./listar-tipodocumento.component.css']
})
export class ListarTipodocumentoComponent implements OnInit {
  tipodocumentos: DataTipodocumento[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getTipodocumento()
    .subscribe(resp => {
      
       this.tipodocumentos = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(tipodocumento:DataTipodocumento):void{
    localStorage.setItem("id",tipodocumento.id.toString());
    this.router.navigate(["../mantenimientos/edittipodocumento"]);
  
  }
}


 
