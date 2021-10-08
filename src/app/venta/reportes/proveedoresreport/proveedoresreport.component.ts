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
import { DataCliente } from '../../../models/cliente';
import { DataCampaniaVenta } from '../../../models/campaniaVenta';
import { DataDepartamento, DataProvincia, DataDistrito } from '../../../models/countries';
import { DataProveedor } from '../../../models/proveedor';
import { PaisI } from '../../../models/pais';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-proveedoresreport',
  templateUrl: './proveedoresreport.component.html',
  styleUrls: ['./proveedoresreport.component.css']
})
export class ProveedoresreportComponent implements OnInit {
  displayedColumns: string[] = ['nro','codigo','proveedor','estado','email','ruc','telefono','pais','departamento','provincia','distritos'  ];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
 
  
  dataSource = new MatTableDataSource<any>();
  cargando = true; 
  public formData: any;
  proveedores: DataProveedor[];
  public departamentos: DataDepartamento[] = [];  
  public provincias: DataProvincia[] = [];
  public distritos: DataDistrito[] = [];
  public paises: PaisI[];
  detalleReporteProveedor:any ;
  loading = false; 
  /*addColumn() {
 
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    console.log(randomColumn);
    console.log(this.columnsToDisplay.push(this.displayedColumns[randomColumn]),'PUSH');
  }*/


  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService,private excelExportService: ExporterService) { 


    
  }
 

  ngOnInit(): void {
    this.resetForm();
    this.mantenimientosService.getProveedor()
    .subscribe(resp => {
      this.proveedores = resp as DataProveedor[]  
   });
   this.mantenimientosService.getDepartamento().subscribe((resp) => {
    this.departamentos = resp;
   
  });
  this.mantenimientosService.getProvinciaAll().subscribe((resp) => {
    this.provincias = resp;
   
  });
  this.mantenimientosService.getDistritoAll().subscribe((resp) => {
    this.distritos = resp;
   
  });
  this.mantenimientosService.getPais().subscribe((resp) => {
    this.paises = resp;
   
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
    
      idProveedor: null, 
      idPais:null, 
      ruc:null,
      idProvincia: null,
      idDistrito: null,
      idDepartamento:null
    };
}


onSubmit(form: NgForm) { 
  this.loading = true; 
  form.value.idProveedor ==null ? form.value.idProveedor='' : form.value.idProveedor;
    form.value.idPais ==null ? form.value.idPais='' : form.value.idPais;
    form.value.ruc ==null ? form.value.ruc='' : form.value.ruc;
    form.value.idProvincia ==null ? form.value.idProvincia='' : form.value.idProvincia;
    form.value.idDistrito ==null ? form.value.idDistrito='' : form.value.idDistrito;
    form.value.idDepartamento ==null ? form.value.idDepartamento='' : form.value.idDepartamento;
  
    const url= 'export-proveedor?'+'idProveedor='+
                form.value.idProveedor+
                '&idPais='+form.value.idPais+
                '&ruc='+form.value.ruc+
                '&idProvincia='+form.value.idProvincia+
                '&idDistrito='+form.value.idDistrito+
                '&idDepartamento='+form.value.idDepartamento;
  //  return window.location.href=this.baseURL+url;

    this.ventaService.getProveedor(url).subscribe(
      resp => { 
       
        if( resp[0] == null   ){
          this.detalleReporteProveedor = [];
          this.cargando = true
          this.loading = false; 
           }else{  
          this.detalleReporteProveedor = resp; 
          this.loading = false; 
          this.cargando = false; 
         
        }  
      });    
}

}
