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
import { DataProveedor } from '../../../models/proveedor';
import { DataEmpleado } from '../../../models/empleado';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  displayedColumns: string[] = ['nro','codProducto','producto','almacen','claseMov','fecha_calendar','time_calendar','cantidad','um','precio','nombreEmpleado','nombreproveedor','nroOrden','codigo'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
 
  
  dataSource = new MatTableDataSource<any>();
  productos: DataProducto[];
  almacen: DataTipoAlmacen[]; 
  proveedores: DataProveedor[];
  empleados: DataEmpleado[];
  public formData: any;
  detalleMovimiento:any ;
  cargando = true; 
  loading = false;  
  getTotalCost() {
    let suma: any;
    const priceNotEmpty = this.detalleMovimiento.filter((res)=> res.precio!='');
    suma =  priceNotEmpty?.map(r => parseFloat(r.precio)).reduce(( acc, value ) =>  (acc + value ), 0); 
 
    return suma;
  }
  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService,private excelExportService: ExporterService) { }
 
  ngOnInit(): void {

    this.resetForm();

    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      // this.formData = resp[0];
      // console.log(this.productos,'producto');
    });
    this.mantenimientosService.getEmpleado().subscribe(resp => {
      // console.log(resp);
      this.empleados = (resp as DataEmpleado[])
      .map(empleados=>{ 
        empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado,'- ',empleados.dni_empleado))
        return empleados;
      });
    });
    this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
      this.almacen = resp as DataTipoAlmacen[];
      // console.log('principal', this.almacen);
    }); 
   this.mantenimientosService.getProveedor()
          .subscribe(resp => {
            this.proveedores = resp as DataProveedor[]  
         });
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
    
      idProducto: null,
      idAlmacen: null,
      idProovedor: null,
      idEmpleado: null,
      fecha:null,
  
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
    if( this.validateForm(form)){
      return;
    }
    else {
      let fechaParseada: any;
      fechaParseada = moment(form.value.fecha).format('DD/MM/YYYY');
      form.value.fecha = fechaParseada;

    form.value.idAlmacen ==null ? form.value.idAlmacen='' : form.value.idAlmacen;
    form.value.idProducto ==null ? form.value.idProducto='' : form.value.idProducto;
    form.value.idProovedor ==null ? form.value.idProovedor='' : form.value.idProovedor;
    form.value.idEmpleado ==null ? form.value.idEmpleado='' : form.value.idEmpleado;
    form.value.fecha === 'Invalid date' ? form.value.fecha='' : form.value.fecha;
  // console.log(form.value.fecha === 'Invalid' ? form.value.fecha='' : form.value.fecha),'FECHA';
    const url= 'export-movimientos?'+'idProducto='+form.value.idProducto+
                '&idEmpleado='+form.value.idEmpleado+
                '&idProovedor='+form.value.idProovedor+
                '&idAlmacen='+form.value.idAlmacen+
                '&fecha='+form.value.fecha;
  //  return window.location.href=this.baseURL+url;
//  console.log( form.value.fecha,'FECHA');
    this.ventaService.getMovimiento(url).subscribe(
      resp => { 
        console.log(resp);
        if( resp[0] == null   ){
          // this.detalleReporteCliente = '';
              this.detalleMovimiento = [];
              this.cargando = true
              this.loading = false; 
              // console.log(this.detalleReporteCliente, 'VACIO');
            }else{
              this.detalleMovimiento = resp;
              this.loading = false;  
              this.cargando = false; 
              this.getTotalCost() 
            }  
  //     console.log(resp);
  // this.detalleMovimiento = resp;
  //        this.cargando = false; 
      });      
  }
}
exportAsXLSX(){
  this.excelExportService.exportToExcel(this.detalleMovimiento,'Movimientos');
    }
}

