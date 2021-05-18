import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { DataEntradaAlmacen } from '../../../models/entradaalmacen';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listarentradaalmacen',
  templateUrl: './listarentradaalmacen.component.html',
  styleUrls: ['./listarentradaalmacen.component.css']
})
export class ListarentradaalmacenComponent implements OnInit {
  ingresosAlmacen: DataEntradaAlmacen[]= [];
  cargando = true; 
  constructor
  (private servicioKardex: KardexService , private router:Router,private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getCotizacion();
  }
  getCotizacion(){

    this.servicioKardex.getIngresoAlmacen()
   .subscribe(resp => {
     
      this.ingresosAlmacen = resp; 
      this.cargando = false;
      // this.cargando = false;
      // console.log(resp);
  });
 } 

 openForEdit(IngresoID: number) {

  this.router.navigate(['kardex/editingresoalmacen/'+IngresoID]);
}
 
EstadoEntradaAnular(entradas: DataEntradaAlmacen, i: number) {

  const bodyform = {id:entradas.id, estadoIngreso: '3'}
  // console.log(entradas.id);
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Anular el Ingreso ${entradas.codigoIngreso}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      
      this.ingresosAlmacen.splice(i, 1);
      this.servicioKardex.EstadoEntradaAnular(entradas.id,bodyform).subscribe(
        resp => {
          this.toastr.error('Ingreso Anulado');
  // console.log(resp);
         //  console.log(resp);
      }

      );
    }
  });
} 
}
