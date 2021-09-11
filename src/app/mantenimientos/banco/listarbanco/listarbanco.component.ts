import { Component, OnInit } from '@angular/core';
import { DataBanco } from 'src/app/models/banco';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataNrocuenta } from 'src/app/models/nrocuenta';

@Component({
  selector: 'app-listarbanco',
  templateUrl: './listarbanco.component.html',
  styleUrls: ['./listarbanco.component.css']
})
export class ListarbancoComponent implements OnInit {
  bancos: DataBanco[] = [];
  // nrocuentas: DataNrocuenta[] = [];
  cargando = true; 

  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getBanco()
    .subscribe(resp => {
      
       this.bancos = resp; 
      this.cargando = false;
      console.log(resp)
   
   });

  }

  Editar(banco:DataBanco):void{
    localStorage.setItem("id",banco.id.toString());
    this.router.navigate(["../mantenimientos/editbanco"]);
  
  }
}