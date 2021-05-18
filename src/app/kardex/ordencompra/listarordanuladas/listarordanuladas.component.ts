import { Component, OnInit } from '@angular/core';
import { DataOrdenCompra } from '../../../models/ordencompra';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarordanuladas',
  templateUrl: './listarordanuladas.component.html',
  styleUrls: ['./listarordanuladas.component.css']
})
export class ListarordanuladasComponent implements OnInit {
  Ordenes:DataOrdenCompra[]=[];
  cargando = true; 

    constructor(private servicioKardex: KardexService , private router:Router) { }


  ngOnInit(): void {
    this.OrdenCompraAnuladas(); 
  }


  OrdenCompraAnuladas(){

    this.servicioKardex.getOrdenCompraAnuladas()
   .subscribe(resp => {
     
      this.Ordenes = resp; 
      this.cargando = false;
    //  console.log(resp);
  });
}
openForEdit(OrdenId:number):void { 
  // this.router.navigate(['kardex/ordencompra/'+OrdenId]);
  this.router.navigate(['kardex/editordencompra/'+OrdenId]); 
 
}
}
