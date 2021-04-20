import { Component, OnInit } from '@angular/core';
import { DataTipoIngreso } from 'src/app/models/tipoingreso';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tipoingreso',
  templateUrl: './listar-tipoingreso.component.html',
  styleUrls: ['./listar-tipoingreso.component.css']
})
export class ListarTipoingresoComponent implements OnInit {
  tipoingresos: DataTipoIngreso[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getTipoingreso()
    .subscribe(resp => {
      
       this.tipoingresos = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(tipoingreso:DataTipoIngreso):void{
    localStorage.setItem("id",tipoingreso.id.toString());
    this.router.navigate(["../mantenimientos/edittipoingreso"]);
  
  }

}
