import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { DataEntradaAlmacen } from '../../../models/entradaalmacen';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listarentradaalmacen',
  templateUrl: './listarentradaalmacen.component.html',
  styleUrls: ['./listarentradaalmacen.component.css']
})
export class ListarentradaalmacenComponent implements OnInit {
  ingresosAlmacen: DataEntradaAlmacen[]= [];
  cargando = true; 

  displayedColumns: string[] = ['Ingreso Almacen Nro', 'Nro Orden Compra', 'Tipo Ingreso', 'Empleado','Fecha Ingreso','Estado','details','Anular'];
  dataSource = new MatTableDataSource<DataEntradaAlmacen>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor
  (private servicioKardex: KardexService , private router:Router,private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getCotizacion();
  }
  getCotizacion(){

    this.servicioKardex.getIngresoAlmacen()
   .subscribe(resp => {
    this.dataSource.data = resp as DataEntradaAlmacen[]; 
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
