import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataSalidaSinOcCerrado } from '../../../models/salidaproductossinoc';
import { DataSalidaProductos } from '../../../models/salidaproductoscerrados';

import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listarsalidasinoc',
  templateUrl: './listarsalidasinoc.component.html',
  styleUrls: ['./listarsalidasinoc.component.css']
})
export class ListarsalidasinocComponent implements OnInit {
  ListIngresoSinOcCerrados:DataSalidaSinOcCerrado []= [];
 
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
  
}
