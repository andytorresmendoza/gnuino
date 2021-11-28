import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { VentaService } from '../../../services/venta/venta.service';
import { ExporterService } from '../../../services/reportes/exporter.service';
import { DataProveedor } from '../../../models/proveedor';
import * as moment from 'moment';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
import { DataProducto } from '../../../models/producto';
@Component({
  selector: 'app-ordensinocreport',
  templateUrl: './ordensinocreport.component.html',
  styleUrls: ['./ordensinocreport.component.css']
})
export class OrdensinocreportComponent implements OnInit {
  displayedColumns: string[] = ['nro','codigoIngresoSinOc','nombre_proovedor','codigoProductoBarra','nombre_producto','cantidadPrincipal','nombre_um','precioUnitario','nombre_alamcen','fechaIngreso' ];
  dataSource = new MatTableDataSource<any>();
  proveedores: DataProveedor[];
  almacen: DataTipoAlmacen[]; 
  productos: DataProducto[];
  loading = false; 
  public formData: any;
  cargando = true; 
  detalleReporteSinOrdenCompra:any ;

  getTotalCost() {
    let suma: any;
    const priceNotEmpty = this.detalleReporteSinOrdenCompra.filter((res)=> res.precioUnitario!='');
    suma =  priceNotEmpty?.map(r => parseFloat(r.precioUnitario)).reduce(( acc, value ) =>  (acc + value ), 0); 
 console.log(suma);
  return suma;
  }
  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService,private excelExportService: ExporterService) { 

  }
  ngOnInit(): void {
    this.resetForm();
    this.mantenimientosService.getProveedor()
    .subscribe(resp => {
      this.proveedores = resp as DataProveedor[]  
      // console.log(this.proveedores);
   });
   this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
    this.almacen = resp as DataTipoAlmacen[];
    // console.log('principal', this.almacen);
  });
  this.mantenimientosService.getProducto().subscribe((resp) => {
    this.productos = resp as DataProducto[];
    // this.formData = resp[0];
    // console.log(this.productos,'producto');
  });
  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
    
      idProveedor: null,
      idAlmacen:null,
      idProducto:null,
      fechaentIni: null, 
      fechaentFin: null
    };
}


onSubmit(form: NgForm) { 
  this.loading = true;
  let fechaParseada1: any;
  fechaParseada1 = moment(form.value.fechaentIni).format('YYYY-MM-DD');
  form.value.fechaentIni = fechaParseada1;

  let fechaParseada2: any;
  fechaParseada2 = moment(form.value.fechaentFin).format('YYYY-MM-DD');
  form.value.fechaentFin = fechaParseada2;
  form.value.idProveedor ==null ? form.value.idProveedor='' : form.value.idProveedor;
  form.value.idAlmacen ==null ? form.value.idAlmacen='' : form.value.idAlmacen;
  form.value.idProducto ==null ? form.value.idProducto='' : form.value.idProducto;
  form.value.fechaentIni === 'Invalid date' ? form.value.fechaentIni='' : form.value.fechaentIni;
  form.value.fechaentFin === 'Invalid date' ? form.value.fechaentFin='' : form.value.fechaentFin;

  const url= 'export-orden-sinoc?'+'idProveedor='+form.value.idProveedor+
                                      '&idAlmacen='+form.value.idAlmacen+
                                      '&idProducto='+form.value.idProducto+
                                      '&fechaentIni='+form.value.fechaentIni+
                                      '&fechaentFin='+form.value.fechaentFin;

                                      this.ventaService.getOrdensinCompraReporte(url).subscribe(
                                        resp => {  
                                          // console.log(resp);
                                          if( resp[0] == null   ){
                                            this.detalleReporteSinOrdenCompra = [];
                                            this.cargando = true
                                            this.loading = false; 
                                             }else{  
                                            this.detalleReporteSinOrdenCompra = resp; 
                                            this.loading = false; 
                                            this.cargando = false; 
                                           
                                          }  
                                        });    

                                       
}
exportAsXLSX(){
  this.excelExportService.exportToExcel(this.detalleReporteSinOrdenCompra,'Sin Orden Compra');
    }
}
