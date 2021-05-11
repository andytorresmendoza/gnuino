import { Component, OnInit } from '@angular/core';
import { DataTransferenciaSinOcCerrado } from '../../../models/transferenciaproductossinoc';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listartransferenciasinoc',
  templateUrl: './listartransferenciasinoc.component.html',
  styleUrls: ['./listartransferenciasinoc.component.css']
})
export class ListartransferenciasinocComponent implements OnInit {
  ListIngresoSinOcCerrados:DataTransferenciaSinOcCerrado []= [];
  cargando = true; 
  constructor  (private servicioKardex: KardexService , private router:Router,private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getListIngresosCerrados(); 
  }
  getListIngresosCerrados(){

    this.servicioKardex.getListIngresossinocCerrados()
   .subscribe(resp => {
     
      this.ListIngresoSinOcCerrados = resp; 
      this.cargando = false;
  
      console.log(resp);
  });
 }
 openForEdit(TransferenciaID: number) {

  this.router.navigate(['kardex/transferenciasinoc/'+TransferenciaID]);
}
}
