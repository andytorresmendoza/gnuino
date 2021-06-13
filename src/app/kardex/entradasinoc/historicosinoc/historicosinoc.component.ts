import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service'; 
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataDetalleIngresoAlmacen } from '../../../models/detalle-ingresoalmacen';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import { DetalleentradasinocComponent } from '../detalleentradasinoc/detalleentradasinoc.component';
import { DataDetalleEntradasinOc } from 'src/app/models/detalleEntradasinOc';
@Component({
  selector: 'app-historicosinoc',
  templateUrl: './historicosinoc.component.html',
  styleUrls: ['./historicosinoc.component.css']
})
export class HistoricosinocComponent implements OnInit {
  ListadoHistoricoSinOc: DataDetalleEntradasinOc[]= [];


  displayedColumns: string[] = ['Nro Ingreso', 'Producto', 'Cantidad Ingresada', 'Fecha Ingresada'];
   dataSource = new MatTableDataSource<DataDetalleEntradasinOc>();
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
  constructor(   @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DetalleentradasinocComponent>,/*verificar este componente */
  public kardexService: KardexService,
  private mantenimientosService: MantenimientosService, private toastr: ToastrService,  private dialog: MatDialog
 
  ) {  }
  ngOnInit(): void {
    this.getListHistoricoSinOcByid();
  }

  getListHistoricoSinOcByid(){ 
    this.kardexService.getListHistoricoSinOcByid(this.data.id) 
   .subscribe(resp => {
    this.dataSource.data = resp as DataDetalleEntradasinOc[]; 
    this.ListadoHistoricoSinOc = resp;
   //this.kardexService.detalleSalida = resp;
      //this.cargando = false;
      // this.cargando = false;
        console.log(resp,'listado');
  });
 }

}
