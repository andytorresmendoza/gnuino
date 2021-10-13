import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProveedor } from 'src/app/models/proveedor';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { ExporterService } from 'src/app/services/reportes/exporter.service';
import { VentaService } from 'src/app/services/venta/venta.service';
import { NgForm } from '@angular/forms';
import { DataTipoOrden } from 'src/app/models/tipo-orden';
import { DataTipoAlmacen } from 'src/app/models/tipoalmacen';
import { DataProducto } from 'src/app/models/producto';
import { DataEstadoFlujo } from 'src/app/models/estadoflujo';
import * as moment from 'moment';
@Component({
  selector: 'app-ordencomprareport',
  templateUrl: './ordencomprareport.component.html',
  styleUrls: ['./ordencomprareport.component.css']
})
export class OrdencomprareportComponent implements OnInit {
  proveedores: DataProveedor[];
  tiporden: DataTipoOrden[]=[];
  almacen: DataTipoAlmacen[]; 
  productos: DataProducto[];
  detalleReporteOrdenVenta:any ;
  loading = false; 
  public formData: any;
  cargando = true; 
  estadoflujos: DataEstadoFlujo[] = [];

  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService,private excelExportService: ExporterService) { 


    
  }
 
  ngOnInit(): void {
    this.resetForm();
    this.mantenimientosService.getProveedor()
    .subscribe(resp => {
      this.proveedores = resp as DataProveedor[]  
      // console.log(this.proveedores);
   });
   
   this.mantenimientosService.getTipOrden().subscribe((resp) => {
    this.tiporden = resp as DataTipoOrden[];
 //  console.log(this.tiporden);
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
  this.mantenimientosService.getEstadoFlujo().subscribe((resp) => {
    this.estadoflujos = resp;
   
  });
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
    
      idProveedor: null,
      idTipoOc: null ,
      idAlmacen:null,
      idProducto:null,
      fechaOcDesde: null,
      fechaOcHasta: null,
      fechaEntregaDesde: null,
      fechaEntregaHasta: null,
      estadoFlujo: null
    };
}


onSubmit(form: NgForm) { 
  this.loading = true; 
  let fechaParseada1: any;
  fechaParseada1 = moment(form.value.fechaOcDesde).format('YYYY-MM-DD');
  form.value.fechaOcDesde = fechaParseada1;

  let fechaParseada2: any;
  fechaParseada2 = moment(form.value.fechaOcHasta).format('YYYY-MM-DD');
  form.value.fechaOcHasta = fechaParseada2;

  let fechaParseada3: any;
  fechaParseada3 = moment(form.value.fechaEntregaDesde).format('YYYY-MM-DD');
  form.value.fechaEntregaDesde = fechaParseada3;

  let fechaParseada4: any;
  fechaParseada4 = moment(form.value.fechaEntregaHasta).format('YYYY-MM-DD');
  form.value.fechaEntregaHasta = fechaParseada4;

  form.value.idProveedor ==null ? form.value.idProveedor='' : form.value.idProveedor;
  form.value.idTipoOc ==null ? form.value.idTipoOc='' : form.value.idTipoOc;
  form.value.idAlmacen ==null ? form.value.idAlmacen='' : form.value.idAlmacen;
  form.value.idProducto ==null ? form.value.idProducto='' : form.value.idProducto;
  form.value.fechaOcDesde === 'Invalid date' ? form.value.fechaOcDesde='' : form.value.fechaOcDesde;
  form.value.fechaOcHasta === 'Invalid date' ? form.value.fechaOcHasta='' : form.value.fechaOcHasta;
  form.value.fechaEntregaDesde === 'Invalid date' ? form.value.fechaEntregaDesde='' : form.value.fechaEntregaDesde;
  form.value.fechaEntregaHasta === 'Invalid date' ? form.value.fechaEntregaHasta='' : form.value.fechaEntregaHasta;
  form.value.estadoFlujo ==null ? form.value.estadoFlujo='' : form.value.estadoFlujo;

  
    const url= 'export-orden-compra?'+'idProveedor='+form.value.idProveedor+
                                      '&idTipoOc='+form.value.idTipoOc+
                                      '&idAlmacen='+form.value.idAlmacen+
                                      '&idProducto='+form.value.idProducto+
                                      '&fechaOcDesde='+form.value.fechaOcDesde+
                                      '&fechaOcHasta='+form.value.fechaOcHasta+
                                      '&fechaEntregaDesde='+form.value.fechaEntregaDesde+
                                      '&fechaEntregaHasta='+form.value.fechaEntregaHasta+
                                      '&estadoFlujo='+form.value.estadoFlujo;
  //  return window.location.href=this.baseURL+url;
console.log(url);
    this.ventaService.getOrdenCompraReporte(url).subscribe(
      resp => { 
       console.log(resp);
        if( resp[0] == null   ){
          this.detalleReporteOrdenVenta = [];
          this.cargando = true
          this.loading = false; 
           }else{  
          this.detalleReporteOrdenVenta = resp; 
          this.loading = false; 
          this.cargando = false; 
         
        }  
      });    
}
}
