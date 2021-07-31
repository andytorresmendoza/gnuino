import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
 
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';
import { VentaService } from 'src/app/services/venta/venta.service';
import { DataCotizacionVenta } from 'src/app/models/cotizacionventa';
 
@Component({
  selector: 'app-listarcotiventaanulada',
  templateUrl: './listarcotiventaanulada.component.html',
  styleUrls: ['./listarcotiventaanulada.component.css']
})
export class ListarcotiventaanuladaComponent implements OnInit {

  cotizaciones:DataCotizacionVenta[]=[];
  cargando = true; 

  displayedColumns: string[] = ['Nro Cotizacion', 'Proveedor', 'Empleado', 'Total', 'Fecha Entrega','Estado','details'];
  dataSource = new MatTableDataSource<DataCotizacionVenta>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private ventaService: VentaService, private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {
    this. getCotizacion();

 }

 getCotizacion(){

  this.ventaService.getCotizacionVentaAnulada()
 .subscribe(resp => {
   this.dataSource.data = resp as DataCotizacionVenta[]; 
     this.cotizaciones = resp; 
    this.cargando = false;
    //  console.log(resp);
});
} 
 

openForEdit(CotizacionId: number) {
// console.log(CotizacionId,'editar');
   this.router.navigate(['venta/venta/'+CotizacionId]);
}

 
 
 
}
