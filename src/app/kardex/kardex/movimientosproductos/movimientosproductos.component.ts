import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataMovimientoKardex } from '../../../models/movimientoskardex';
import { ExporterService } from '../../../services/reportes/exporter.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-movimientosproductos',
  templateUrl: './movimientosproductos.component.html',
  styleUrls: ['./movimientosproductos.component.css']
})

export class MovimientosproductosComponent implements OnInit {
  displayedColumns: string[] = ['Nombre Producto','codigo','cantidad','almacen','fecha','nroOrden','precio' ];
  dataSource = new MatTableDataSource<DataMovimientoKardex>();
  cabeceraProducto:any; 
  movimientosProductos: DataMovimientoKardex[] = [];
  
  getTotalCost() {
    let suma: any;
    const priceNotEmpty = this.movimientosProductos.filter((res)=> res.precio!='');
    suma =  priceNotEmpty?.map(r => parseFloat(r.precio)).reduce(( acc, value ) =>  (acc + value ), 0); 
 
    return suma / priceNotEmpty.length;
  }

  
  constructor(public kardexService: KardexService,  private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute,
    private excelExportService: ExporterService)
  {}

  
  ngOnInit(): void {
 
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getMovimientoProductos(+id).subscribe(res => {
    this.cabeceraProducto = res[0].detalleKardex; 
      this.movimientosProductos = res[0].detalleMovs;  
     console.log(this.movimientosProductos); 
    }); 
  }
 
  exportAsXLSX(){
this.excelExportService.exportToExcel(this.movimientosProductos,'MovimientosProductos');
  }

}

   
   
 
   
 