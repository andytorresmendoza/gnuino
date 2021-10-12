import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from "src/app/services/mantenimientos/mantenimientos.service";
import { VentaService } from "src/app/services/venta/venta.service";
import { DataProducto } from "src/app/models/producto";
import { DataTipoAlmacen } from "src/app/models/tipoalmacen"; 
import { NgForm } from '@angular/forms'; 
import { ExporterService } from "src/app/services/reportes/exporter.service";
import { DataCliente } from '../../../models/cliente';
import { DataCampaniaVenta } from '../../../models/campaniaVenta';
import { DataDepartamento, DataProvincia, DataDistrito } from '../../../models/countries';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nro','codigoCliente','nombre_cliente','nombre_categoria','nombre_departamento','nombre_provincia','nombre_distrito','email_cliente'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();  
  dataSource = new MatTableDataSource<any>(); 
  
  productos: DataProducto[];
  clientes: DataCliente[] = [];
  campania: DataCampaniaVenta[] = [];
  public categoriaCliente: any[]=[];
  almacen: DataTipoAlmacen[];
  public departamentos: DataDepartamento[] = [];  
  public provincias: DataProvincia[] = [];
  public distritos: DataDistrito[] = []; 
  public formData: any;
  detalleReporteCliente:any ;
  cargando = true;  
  loading = false;  
  constructor( private http: HttpClient,  private router:Router,private mantenimientosService: MantenimientosService,private ventaService: VentaService,private excelExportService: ExporterService) { }
 
  ngOnInit(): void {

    this.resetForm();
    this.mantenimientosService.getCliente().subscribe(resp => {
      this.clientes = (resp as DataCliente[])
      .map(clientes=>{
        // clientes.nombre_cliente = clientes.nombre_cliente.toUpperCase();
       clientes.nombre_cliente =   (clientes.nombre_cliente.concat(', ', clientes.apellidos_pat_cliente,' ',clientes.apellidos_mat_cliente,'- ',clientes.dni_cliente))
        return clientes;
      }); 
    });
    this.mantenimientosService.getCategoriaCliente().subscribe((resp) => {
      this.categoriaCliente = resp;
     
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
    this.mantenimientosService.getDistritoAll().subscribe((resp) => {
      this.distritos = resp;
     
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
    
      idCliente: null,
      idCategoria: null,
      idCampain: null, 
      idProvincia: null,
      idDistrito: null,
      idDepartamento:null
    };
}
 

  onSubmit(form: NgForm) { 
    this.loading = true; 
    
    form.value.idCliente ==null ? form.value.idCliente='' : form.value.idCliente;
    form.value.idCategoria ==null ? form.value.idCategoria='' : form.value.idCategoria;
    form.value.idCampain ==null ? form.value.idCampain='' : form.value.idCampain;
    form.value.idProvincia ==null ? form.value.idProvincia='' : form.value.idProvincia;
    form.value.idDistrito ==null ? form.value.idDistrito='' : form.value.idDistrito;
    form.value.idDepartamento ==null ? form.value.idDepartamento='' : form.value.idDepartamento;
  
    const url= 'export-clientes?'+'idCliente='+
                form.value.idCliente+
                '&idCategoria='+form.value.idCategoria+
                '&idCampain='+form.value.idCampain+
                '&idProvincia='+form.value.idProvincia+
                '&idDistrito='+form.value.idDistrito+
                '&idDepartamento='+form.value.idDepartamento;
  //  return window.location.href=this.baseURL+url;

    this.ventaService.getCliente(url).subscribe(
      resp => {
        console.log(resp);
    if( resp[0] == null   ){
          this.detalleReporteCliente = [];
          this.cargando = true
          this.loading = false; 
           }else{  
          this.detalleReporteCliente = resp; 
          this.loading = false; 
          this.cargando = false; 
         
        }  
   
      });      
  }
 
exportAsXLSX(){
  this.excelExportService.exportToExcel(this.detalleReporteCliente,'Reporte Clientes');
    }
}
