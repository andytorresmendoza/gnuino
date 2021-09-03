import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataPrecioVenta } from 'src/app/models/precioVenta';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-precio-venta',
  templateUrl: './listar-precio-venta.component.html',
  styleUrls: ['./listar-precio-venta.component.css']
})
export class ListarPrecioVentaComponent implements OnInit {
  displayedColumns: string[] = ['Codigo Producto','Nombre', 'Nombre Almacen', 'Precio Venta', 'Fecha', 'Estado','details', 'Activar',   'Inactivar'];
  dataSource = new MatTableDataSource<DataPrecioVenta>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sort:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  precioVenta: DataPrecioVenta[] = [];
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService) { }


  ngOnInit(): void {
    
    this. getPrecioVenta();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getPrecioVenta(){

    this.mantenientoservice.getPrecioVenta()
   .subscribe(resp => {
    this.dataSource.data = resp as DataPrecioVenta[]; 
   this.precioVenta = resp;
  });
 } 

 openForEdit(precioId: number) {

  this.router.navigate(['mantenimientos/precioventa/'+precioId]);
}
Activar(form: DataPrecioVenta, i: number) {
  const bodyform = {
    ...form,
    estado: 1,
  };
  Swal.fire({
    title: 'Esta seguro que desea Activar?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantenientoservice
        .ActivarPrecioVenta(form.id, bodyform)
        .subscribe((resp) => {
          this.toastr.success('Activo');
          this.ngOnInit();
        });
    }
  });
}
Inactivar(form: DataPrecioVenta, i: number) {
  Swal.fire({
    title: 'Esta seguro que desea Anular?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.mantenientoservice
        .InactivarPrecioVenta(form.id)
        .subscribe((resp) => {
          this.toastr.error('Inactivo');
          this.ngOnInit();
        });
    }
  });
}
}
