import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataSalidaProductos } from 'src/app/models/salidaproductoscerrados';
 
@Component({
  selector: 'app-listarsalidaproducto',
  templateUrl: './listarsalidaproducto.component.html',
  styleUrls: ['./listarsalidaproducto.component.css']
})
export class ListarsalidaproductoComponent implements OnInit {
 ListIngresosCerrados:DataSalidaProductos []= [];
 cargando = true; 
  constructor
  (private servicioKardex: KardexService , private router:Router,private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getListIngresosCerrados();
  }

  getListIngresosCerrados(){

    this.servicioKardex.getListIngresosCerrados()
   .subscribe(resp => {
     
      this.ListIngresosCerrados = resp; 
      this.cargando = false;
      // this.cargando = false;
      console.log(resp);
  });
 }

 openForEdit(SalidaID: number) {

  this.router.navigate(['kardex/salidaProducto/'+SalidaID]);
}

 
  
  }

 