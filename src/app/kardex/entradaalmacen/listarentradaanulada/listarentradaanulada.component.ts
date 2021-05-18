import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { DataEntradaAlmacen } from '../../../models/entradaalmacen';
@Component({
  selector: 'app-listarentradaanulada',
  templateUrl: './listarentradaanulada.component.html',
  styleUrls: ['./listarentradaanulada.component.css']
})
export class ListarentradaanuladaComponent implements OnInit {
  Entradas:DataEntradaAlmacen[]=[];
  cargando = true; 
  constructor(private servicioKardex: KardexService , private router:Router) { }


  ngOnInit(): void {
    this.EntradasAnuladas();
  }


  EntradasAnuladas(){

    this.servicioKardex.getEntradasAnuladas()
   .subscribe(resp => {
     
      this.Entradas = resp; 
      this.cargando = false;
    //  console.log(resp);
  });
}

openForEdit(IngresoID:number):void { 
  // this.router.navigate(['kardex/ordencompra/'+OrdenId]);
  this.router.navigate(['kardex/editingresoalmacen/'+IngresoID]); 
 
}
}
