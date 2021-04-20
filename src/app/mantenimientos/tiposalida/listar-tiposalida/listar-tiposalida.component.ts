import { Component, OnInit } from '@angular/core';
import { DataTipoSalida } from 'src/app/models/tiposalida';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tiposalida',
  templateUrl: './listar-tiposalida.component.html',
  styleUrls: ['./listar-tiposalida.component.css']
})
export class ListarTiposalidaComponent implements OnInit {
  tiposalidas: DataTipoSalida[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getTiposalida()
    .subscribe(resp => {
      
       this.tiposalidas = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(tiposalida:DataTipoSalida):void{
    localStorage.setItem("id",tiposalida.id.toString());
    this.router.navigate(["../mantenimientos/edittiposalida"]);
  
  }
}


