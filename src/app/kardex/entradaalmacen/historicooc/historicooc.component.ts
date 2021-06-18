import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DetalleentradaalmacenComponent } from '../detalleentradaalmacen/detalleentradaalmacen.component';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataDetalleIngresoAlmacen } from '../../../models/detalle-ingresoalmacen';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-historicooc',
  templateUrl: './historicooc.component.html',
  styleUrls: ['./historicooc.component.css']
})
export class HistoricoocComponent implements OnInit {
  ListadoHistoricoOc: DataDetalleIngresoAlmacen[]= [];


  displayedColumns: string[] = ['Nro Ingreso', 'Producto', 'Cantidad Ingresada', 'Fecha Ingresada'];
   dataSource = new MatTableDataSource<DataDetalleIngresoAlmacen>();
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleentradaalmacenComponent>,/*verificar este componente */
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService, private toastr: ToastrService,  private dialog: MatDialog
   
    ) {  }

  ngOnInit(): void {
    this.getListHistoricoOcByid();
 
  }
  getListHistoricoOcByid(){ 
    this.kardexService.getHitoricoOcById(this.data.id) 
   .subscribe(resp => {
    this.dataSource.data = resp as DataDetalleIngresoAlmacen[]; 
    this.ListadoHistoricoOc = resp;
   //this.kardexService.detalleSalida = resp;
      //this.cargando = false;
      // this.cargando = false;
       // console.log(resp,'listado');
  });
 }
}
