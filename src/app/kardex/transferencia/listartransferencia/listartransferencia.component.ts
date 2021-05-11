import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataTransferenciaProductos } from '../../../models/transferenciaproductos';

@Component({
  selector: 'app-listartransferencia',
  templateUrl: './listartransferencia.component.html',
  styleUrls: ['./listartransferencia.component.css']
})
export class ListartransferenciaComponent implements OnInit {
  ListIngresosCerrados:DataTransferenciaProductos []= [];
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

  
 openForEdit(TransferenciaID: number) {
console.log(TransferenciaID);
  this.router.navigate(['kardex/transferencia/'+TransferenciaID]);
}
}
