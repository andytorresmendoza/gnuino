import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataEntradaSinOC } from '../../../models/entradasinOc';

@Component({
  selector: 'app-listarentradasinoc',
  templateUrl: './listarentradasinoc.component.html',
  styleUrls: ['./listarentradasinoc.component.css']
})
export class ListarentradasinocComponent implements OnInit {
  entradaSinOc:DataEntradaSinOC[]=[];
  cargando = true; 
  constructor (private servicioKardex: KardexService , private router:Router,  private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getEntradasinOC();
  }
  getEntradasinOC(){

    this.servicioKardex.getIngresoSinOC()
   .subscribe(resp => {
     
      this.entradaSinOc = resp; 
      this.cargando = false;
       console.log(resp);
  });
 } 
 openForEdit(Entradaid: number) {

  this.router.navigate(['kardex/entradasinoc/'+Entradaid]);
}



}
