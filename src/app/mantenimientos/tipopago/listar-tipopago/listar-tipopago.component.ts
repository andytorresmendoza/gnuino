import { Component, OnInit } from '@angular/core';
import { DataTipoPago } from 'src/app/models/tipopago';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tipopago',
  templateUrl: './listar-tipopago.component.html',
  styleUrls: ['./listar-tipopago.component.css']
})
export class ListarTipopagoComponent implements OnInit {
  tipopagos: DataTipoPago[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getTipopago()
    .subscribe(resp => {
      
       this.tipopagos = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(tipopago:DataTipoPago):void{
    localStorage.setItem("id",tipopago.id.toString());
    this.router.navigate(["../mantenimientos/edittipopago"]);
  
  }
}
