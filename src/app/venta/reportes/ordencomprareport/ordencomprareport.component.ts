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
 
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-ordencomprareport',
  templateUrl: './ordencomprareport.component.html',
  styleUrls: ['./ordencomprareport.component.css']
})
export class OrdencomprareportComponent implements OnInit {
  displayedColumns: string[] = ['nro','numOrdenCompra','tipoOv','nombreProovedor','codProducto','nombreProducto','cantidad','detalleNameUnidadMedida','importe','detalleNombreSede' ,'nombreBancoCompra' ,'codigo_cotizacion_num' ,'fechaEntrega','entrada_mercaderia','estadoFlujo'];
  // columnsToDisplay: string[] = this.displayedColumns.slice(); 
  
  dataSource = new MatTableDataSource<any>();
  proveedores: DataProveedor[];
  tiporden: DataTipoOrden[]=[];
  almacen: DataTipoAlmacen[]; 
  productos: DataProducto[];
  detalleReporteOrdenCompra:any ;
  loading = false; 
  public formData: any;
  cargando = true; 
  estadoflujos: DataEstadoFlujo[] = [];

  getTotalCost() {
    let suma: any;
    const priceNotEmpty = this.detalleReporteOrdenCompra.filter((res)=> res.importe!='');
    suma =  priceNotEmpty?.map(r => parseFloat(r.importe)).reduce(( acc, value ) =>  (acc + value ), 0); 
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
      fechaocIni: null, 
      fechaocFin: null,
      fechaentIni: null,
      fechaentFin: null,
      estadoFlujo: null
    };
}


onSubmit(form: NgForm) { 
  this.loading = true; 
  let fechaParseada1: any;
  fechaParseada1 = moment(form.value.fechaocIni).format('YYYY-MM-DD');
  form.value.fechaocIni = fechaParseada1;

  let fechaParseada2: any;
  fechaParseada2 = moment(form.value.fechaocFin).format('YYYY-MM-DD');
  form.value.fechaocFin = fechaParseada2;

  let fechaParseada3: any;
  fechaParseada3 = moment(form.value.fechaentIni).format('YYYY-MM-DD');
  form.value.fechaentIni = fechaParseada3;

  let fechaParseada4: any;
  fechaParseada4 = moment(form.value.fechaentFin).format('YYYY-MM-DD');
  form.value.fechaentFin = fechaParseada4;

  form.value.idProveedor ==null ? form.value.idProveedor='' : form.value.idProveedor;
  form.value.idTipoOc ==null ? form.value.idTipoOc='' : form.value.idTipoOc;
  form.value.idAlmacen ==null ? form.value.idAlmacen='' : form.value.idAlmacen;
  form.value.idProducto ==null ? form.value.idProducto='' : form.value.idProducto;
  form.value.fechaocIni === 'Invalid date' ? form.value.fechaocIni='' : form.value.fechaocIni;
  form.value.fechaocFin === 'Invalid date' ? form.value.fechaocFin='' : form.value.fechaocFin;
  form.value.fechaentIni === 'Invalid date' ? form.value.fechaentIni='' : form.value.fechaentIni;
  form.value.fechaentFin === 'Invalid date' ? form.value.fechaentFin='' : form.value.fechaentFin;
  form.value.estadoFlujo ==null ? form.value.estadoFlujo='' : form.value.estadoFlujo;

  
    const url= 'export-orden-compra?'+'idProveedor='+form.value.idProveedor+
                                      '&idTipoOc='+form.value.idTipoOc+
                                      '&idAlmacen='+form.value.idAlmacen+
                                      '&idProducto='+form.value.idProducto+
                                      '&fechaocIni='+form.value.fechaocIni+
                                      '&fechaocFin='+form.value.fechaocFin+
                                      '&fechaentIni='+form.value.fechaentIni+
                                      '&fechaentFin='+form.value.fechaentFin+
                                      '&estadoFlujo='+form.value.estadoFlujo;
 
    this.ventaService.getOrdenCompraReporte(url).subscribe(
      resp => {  
        if( resp[0] == null   ){
          this.detalleReporteOrdenCompra = [];
          this.cargando = true
          this.loading = false; 
           }else{  
          this.detalleReporteOrdenCompra = resp; 
          this.loading = false; 
          this.cargando = false; 
         
        }  
      });    
}
exportAsXLSX(){
  this.excelExportService.exportToExcel(this.detalleReporteOrdenCompra,'Orden Compra');
    }
}
