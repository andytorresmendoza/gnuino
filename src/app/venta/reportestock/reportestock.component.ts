import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MantenimientosService } from '../../services/mantenimientos/mantenimientos.service';
import { DataProducto } from '../../models/producto';
import { DataTipoAlmacen } from '../../models/tipoalmacen';
import { DataModelo } from 'src/app/models/modelo';
import { DataCategoria } from '../../models/categoria';
import { VentaService } from '../../services/venta/venta.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
}  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reportestock',
  templateUrl: './reportestock.component.html',
  styleUrls: ['./reportestock.component.css']
})
export class ReportestockComponent implements OnInit {
  productos: DataProducto[];
  almacen: DataTipoAlmacen[];
  modelos: DataModelo[];
  categorias: DataCategoria[];
  public formData: any;
  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService) { }
  baseURL = environment.apiURL;
  ngOnInit(): void {

    this.resetForm();

    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      // this.formData = resp[0];
      // console.log(this.productos,'producto');
    });
    this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
      this.almacen = resp as DataTipoAlmacen[];
      console.log('principal', this.almacen);
    });

   
      this.mantenimientosService.getModelo().subscribe(
        (resp) => {
          this.modelos = resp as DataModelo[];
        });

        this.mantenimientosService.getCategoria().subscribe(
          (resp) => {
            this.categorias = resp as DataCategoria[];
          });
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
    
      idProducto: null,
      idAlmacen: null,
      idModelo: null,
      idCategoria: null,
      idStock:null
    };
}
validateForm(form:NgForm) {
  if(form.value.idStock == null )
  return   Swal.fire({
     title: 'Seleccionar Stock' , 
     icon: 'error',
   });    

}
  /*onSubmit(form: NgForm) { 
     this.ventaService.getReporteStock(form.value).subscribe(
      resp => {
 
  this.ngOnInit();

    });
  } */
  onSubmit(form: NgForm) { 
    if( this.validateForm(form)){
      return;
    }
    else {
    form.value.idAlmacen ==null ? form.value.idAlmacen='' : form.value.idAlmacen;
    form.value.idProducto ==null ? form.value.idProducto='' : form.value.idProducto;
    form.value.idModelo ==null ? form.value.idModelo='' : form.value.idModelo;
    form.value.idCategoria ==null ? form.value.idCategoria='' : form.value.idCategoria;
  
    const url= 'export-stock?'+'idProducto='+
                form.value.idProducto+
                '&idCategoria='+form.value.idCategoria+
                '&idModelo='+form.value.idModelo+
                '&idAlmacen='+form.value.idAlmacen+
                '&idStock='+form.value.idStock;
  //  return window.location.href=this.baseURL+url;

    this.ventaService.getReporteStock(url).subscribe(
      resp => {
        console.log(resp);
      });      
  }
}
}
