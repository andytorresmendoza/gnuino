import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from "src/app/services/mantenimientos/mantenimientos.service";
import { VentaService } from "src/app/services/venta/venta.service";
import { DataProducto } from "src/app/models/producto";
import { DataTipoAlmacen } from "src/app/models/tipoalmacen";
import { DataModelo } from "src/app/models/modelo";
import { DataCategoria } from "src/app/models/categoria";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ExporterService } from "src/app/services/reportes/exporter.service";
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  displayedColumns: string[] = ['nro','codigoProductoBarra','nombre_producto','nombre_modelo','nombre_um','stock','almacen','stock_transito','stock_reservado','bloqueado'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();  
  dataSource = new MatTableDataSource<any>();

  productos: DataProducto[];
  almacen: DataTipoAlmacen[];
  modelos: DataModelo[];
  categorias: DataCategoria[];
  public formData: any;
  detalleReporteStock:any ;
  cargando = true; 
  loading = false; 
  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService,private excelExportService: ExporterService) { }
 
  ngOnInit(): void {

    this.resetForm();

    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      // this.formData = resp[0];
      // console.log(this.productos,'producto');
    });
    this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
      this.almacen = resp as DataTipoAlmacen[];
      // console.log('principal', this.almacen);
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

  onSubmit(form: NgForm) { 
    this.loading = true; 
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
        if( resp[0] == null   ){
          this.detalleReporteStock = [];
          this.cargando = true
          this.loading = false; 
           }else{  
          this.detalleReporteStock = resp; 
          this.loading = false; 
          this.cargando = false; 
         
        }  
      });      
  }
}
exportAsXLSX(){
  this.excelExportService.exportToExcel(this.detalleReporteStock,'Reporte Stock');
    }
}
