import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { VentaService } from '../../../services/venta/venta.service';
import { ExporterService } from '../../../services/reportes/exporter.service';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataProducto } from '../../../models/producto';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
import { DataCategoria } from '../../../models/categoria';
import { DataModelo } from '../../../models/modelo';

import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-preciosreport',
  templateUrl: './preciosreport.component.html',
  styleUrls: ['./preciosreport.component.css']
})
export class PreciosreportComponent implements OnInit {

  displayedColumns: string[] = ['nro','codigoProductoBarra','nombre_producto','nombre_alamcen','nombre_um','precioCompra','precioVenta','utilidad'];
  // columnsToDisplay: string[] = this.displayedColumns.slice(); 
  
  dataSource = new MatTableDataSource<any>();

  public formData: any;
  cargando = true; 
  loading = false; 
  productos: DataProducto[];
  almacen: DataTipoAlmacen[];  
  categorias: DataCategoria[];
  modelos: DataModelo[];
  detallePrecios:any ;

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
    this.mantenimientosService.getCategoria().subscribe(
      (resp) => {
        this.categorias = resp as DataCategoria[];
      });
      this.mantenimientosService.getModelo().subscribe(
        (resp) => {
          this.modelos = resp as DataModelo[];
        });

  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
      idProducto: null,
      idAlmacen: null,
      idCategoria: null,
      idModelo: null
    }
  }
  onSubmit(form: NgForm) { 
    console.log(form.value);
    this.loading = true; 
    form.value.idProducto ==null ? form.value.idProducto='' : form.value.idProducto;
    form.value.idAlmacen ==null ? form.value.idAlmacen='' : form.value.idAlmacen;
    form.value.idCategoria ==null ? form.value.idCategoria='' : form.value.idCategoria;
    form.value.idModelo ==null ? form.value.idModelo='' : form.value.idModelo;

    const url= 'export-reporte-precios?'+'idProducto='+form.value.idProducto+
    '&idAlmacen='+form.value.idAlmacen+
    '&idCategoria='+form.value.idCategoria+
    '&idModelo='+form.value.idModelo;
    // console.log(url);
    this.ventaService.getPreciosReporte(url).subscribe(
      resp => {  
        // console.log(resp);
        if( resp[0] == null   ){
         
              this.detallePrecios = [];
              this.cargando = true;
              this.loading = false; 
            }else{
              this.detallePrecios = resp;
              this.loading = false; 
              this.cargando = false; 
           }  
 
      });      


  }
  exportAsXLSX(){
    this.excelExportService.exportToExcel(this.detallePrecios,'Precios');
      }



}
