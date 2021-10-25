import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from "src/app/services/mantenimientos/mantenimientos.service";
import { VentaService } from "src/app/services/venta/venta.service";
import { DataProducto } from "src/app/models/producto";
import { DataTipoAlmacen } from "src/app/models/tipoalmacen";
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ExporterService } from "src/app/services/reportes/exporter.service";
 
import { DataEmpleado } from '../../../models/empleado';
import { DataTipoCoti } from "src/app/models/tipo-cotizacion";
import { DataCampaniaVenta } from "src/app/models/campaniaVenta";
import { DataDepartamento, DataDistrito, DataProvincia } from "src/app/models/countries";
import { DataCliente } from "src/app/models/cliente";
import {MatTableDataSource} from '@angular/material/table';
import { DataEstadoFlujo } from '../../../models/estadoflujo';

@Component({
  selector: 'app-ventadirectareport',
  templateUrl: './ventadirectareport.component.html',
  styleUrls: ['./ventadirectareport.component.css']
})
export class VentadirectareportComponent implements OnInit {
  displayedColumns: string[] = ['nro','tipoOv','nombreCliente','codProducto','nombreProducto','nombreCanal','nombreCampain','cantidad','detalleNameUnidadMedida','precioVenta' ,'detalleNombreSede' ,'nombreBancoDirecta' ,'codigo_cotizacion_num_venta','fechaVentaDirecta' ,'vendedor','estado','departamento','provincia','distrito'];
  // columnsToDisplay: string[] = this.displayedColumns.slice(); 
  
  dataSource = new MatTableDataSource<any>();

  productos: DataProducto[];
  almacen: DataTipoAlmacen[];  
  empleados: DataEmpleado[];
  tipocotizacion: DataTipoCoti[];
  canalVenta:any[];
  public departamentos: DataDepartamento[] = [];  
  public provincias: DataProvincia[] = [];
  public distritos: DataDistrito[] = [];
  clientes: DataCliente[] = [];
  campania: DataCampaniaVenta[] = [];
  estadoflujos: DataEstadoFlujo[] = [];
  public formData: any;
  detalleVentaDirecta:any ;
  cargando = true; 
  loading = false; 
  getTotalCost() {
    let suma: any;
    const priceNotEmpty = this.detalleVentaDirecta.filter((res)=> res.precioVenta!='');
    suma =  priceNotEmpty?.map(r => parseFloat(r.precioVenta)).reduce(( acc, value ) =>  (acc + value ), 0); 
 
    return suma;
  }

  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService,private excelExportService: ExporterService) { }
 
  ngOnInit(): void {

    this.resetForm();
    this.mantenimientosService.getTipCotizacionVenta()
    .subscribe(resp => {
      this.tipocotizacion = resp as DataTipoCoti[]  
     //  console.log(resp);
   });
   this.mantenimientosService.getCanalVenta()
   .subscribe(resp => {
    //  console.log(resp);
     this.canalVenta = resp as any[]  
  });
  this.mantenimientosService.getCampaniaVenta().subscribe((resp) => {
    this.campania = resp;
   
  });

  this.mantenimientosService.getDepartamento().subscribe((resp) => {
    this.departamentos = resp;
   
  });
  this.mantenimientosService.getProvinciaAll().subscribe((resp) => {
    this.provincias = resp;
   
  });
  this.mantenimientosService.getEstadoFlujo().subscribe((resp) => {
   // this.estadoflujos = resp;
    this.estadoflujos = (resp as DataEstadoFlujo[]).filter(valor=>valor.id == 3)
   
  });
  this.mantenimientosService.getDistritoAll().subscribe((resp) => {
    this.distritos = resp;
   
  });
  this.mantenimientosService.getCliente().subscribe(resp => {
    this.clientes = (resp as DataCliente[])
    .map(clientes=>{
      // clientes.nombre_cliente = clientes.nombre_cliente.toUpperCase();
     clientes.nombre_cliente =   (clientes.nombre_cliente.concat(', ', clientes.apellidos_pat_cliente,' ',clientes.apellidos_mat_cliente,'- ',clientes.dni_cliente))
      return clientes;
    }); 
  });
    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      // this.formData = resp[0];
      // console.log(this.productos,'producto');
    });
    this.mantenimientosService.getEmpleado().subscribe(resp => {
      // console.log(resp);
      this.empleados = (resp as DataEmpleado[]).filter(valor=>valor.idPerfilUsuario !== 4)
      .map(empleados=>{ 
        empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado))
        return empleados;
      });
    });
    this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
      this.almacen = resp as DataTipoAlmacen[];
      // console.log('principal', this.almacen);
    }); 
   
  }
  onSelectDepartamento($event:any):void{
 
    this.mantenimientosService.getProvincia($event)
    .subscribe(response=>{   
 
      this.provincias = response;

    });
  } 
  onSelectProvincia($event:any):void{
   
   this.mantenimientosService.getDistrito($event)
     .subscribe(response=>{  

      this.distritos = response;
    //  console.log(response);

    });
  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {

 idTipoCotizacion: null,
 idAlmacen: null,
 idProducto: null,
 idCanalVenta: null,
 idCampain: null,
 idCliente: null,
  idEmpleado: null,
 idDepartamento: null,
 idProvincia: null,
 idDistrito: null,  
 fechaentIni: null,
 fechaentFin: null,  
 idEstadoFlujo: null
  
    };
}
validateForm(form:NgForm) {
 
   if(form.value.fecha == 'Invalid' )
  return   Swal.fire({
     title: 'Seleccionar Fecha' , 
     icon: 'error',
   });    


}

  onSubmit(form: NgForm) { 
    this.loading = true; 
      let fechaParseada1: any;
      fechaParseada1 = moment(form.value.fechaovIni).format('YYYY-MM-DD');
      form.value.fechaovIni = fechaParseada1;

      let fechaParseada2: any;
      fechaParseada2 = moment(form.value.fechaovFin).format('YYYY-MM-DD');
      form.value.fechaovFin = fechaParseada2;

      let fechaParseada3: any;
      fechaParseada3 = moment(form.value.fechaentIni).format('YYYY-MM-DD');
      form.value.fechaentIni = fechaParseada3;

      let fechaParseada4: any;
      fechaParseada4 = moment(form.value.fechaentFin).format('YYYY-MM-DD');
      form.value.fechaentFin = fechaParseada4;

    form.value.idTipoCotizacion ==null ? form.value.idTipoCotizacion='' : form.value.idTipoCotizacion;
    form.value.idAlmacen ==null ? form.value.idAlmacen='' : form.value.idAlmacen;
    form.value.idProducto ==null ? form.value.idProducto='' : form.value.idProducto;
    form.value.idCanalVenta ==null ? form.value.idCanalVenta='' : form.value.idCanalVenta;
    form.value.idCampain ==null ? form.value.idCampain='' : form.value.idCampain;
    form.value.idCliente ==null ? form.value.idCliente='' : form.value.idCliente;
      form.value.idEmpleado ==null ? form.value.idEmpleado='' : form.value.idEmpleado;
    form.value.idDepartamento ==null ? form.value.idDepartamento='' : form.value.idDepartamento;
    form.value.idProvincia ==null ? form.value.idProvincia='' : form.value.idProvincia;
    form.value.idDistrito ==null ? form.value.idDistrito='' : form.value.idDistrito;
      form.value.fechaentIni === 'Invalid date' ? form.value.fechaentIni='' : form.value.fechaentIni;
    form.value.fechaentFin === 'Invalid date' ? form.value.fechaentFin='' : form.value.fechaentFin;
    form.value.idEstadoFlujo ==null ? form.value.idEstadoFlujo='' : form.value.idEstadoFlujo;
   
    const url= 'export-venta-directa?'+'idTipoCotizacion='+form.value.idTipoCotizacion+
                '&idAlmacen='+form.value.idAlmacen+
                '&idProducto='+form.value.idProducto+
                '&idCanalVenta='+form.value.idCanalVenta+
                '&idCampain='+form.value.idCampain+
                '&idCliente='+form.value.idCliente+
                '&idEmpleado='+form.value.idEmpleado+
                '&idDepartamento='+form.value.idDepartamento+
                '&idProvincia='+form.value.idProvincia+
                '&idDistrito='+form.value.idDistrito+ 
                '&fechaentIni='+form.value.fechaentIni+
                '&fechaentFin='+form.value.fechaentFin+
                '&idEstadoFlujo='+form.value.idEstadoFlujo;
  //  return window.location.href=this.baseURL+url;
//  console.log( form.value.fecha,'FECHA');
    this.ventaService.getMovimiento(url).subscribe(
      resp => { 
        // console.log(resp);
        if( resp[0] == null   ){
          // this.detalleReporteCliente = '';
              this.detalleVentaDirecta = [];
              this.cargando = true
              this.loading = false; 
              // console.log(this.detalleReporteCliente, 'VACIO');
            }else{
              this.detalleVentaDirecta = resp;
              this.loading = false; 
              // console.log(this.detalleReporteCliente, 'CORRECTO');
              this.cargando = false; 
              this.getTotalCost() 
            }  
 
      });      
 
}
exportAsXLSX(){
  this.excelExportService.exportToExcel(this.detalleVentaDirecta,'Venta Directa');
    }
}

