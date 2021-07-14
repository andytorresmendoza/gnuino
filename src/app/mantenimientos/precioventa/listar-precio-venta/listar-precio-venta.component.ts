import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataPrecioVenta } from 'src/app/models/precioVenta';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listar-precio-venta',
  templateUrl: './listar-precio-venta.component.html',
  styleUrls: ['./listar-precio-venta.component.css']
})
export class ListarPrecioVentaComponent implements OnInit {
  displayedColumns: string[] = ['Codigo Producto','Nombre', 'Nombre Almacen', 'Precio Venta', 'Fecha','details'];
  dataSource = new MatTableDataSource<DataPrecioVenta>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService) { }


  ngOnInit(): void {
    
    this. getPrecioVenta();
  }

  getPrecioVenta(){

    this.mantenientoservice.getPrecioVenta()
   .subscribe(resp => {
    this.dataSource.data = resp as DataPrecioVenta[]; 
      // this.cliente = resp; 
    console.log(resp);
      // this.cargando = false;
     //  console.log(resp);
  });
 } 

 openForEdit(precioId: number) {

  this.router.navigate(['mantenimientos/precioventa/'+precioId]);
}

}
