import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataProducto } from 'src/app/models/producto';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  displayedColumns: string[] = ['Codigo Producto', 'Categoria','Modelo','Nombre Producto', 'Unidad de Medida','Estado','details', 'Activar','Inactivar'];
  dataSource = new MatTableDataSource<DataProducto>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sort:any;
   @ViewChild(MatPaginator) paginator: MatPaginator;
 productos: DataProducto[] = [];

  constructor(private mantemientosService: MantenimientosService, private router:Router,  private toastr: ToastrService ) { }
 
  ngOnInit(): void {
    this.mantemientosService.getProducto()
    .subscribe(resp => {
      this.dataSource.data = resp as DataProducto[];  
   });

  }
 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openForEdit(ProductoId: number) {

    this.router.navigate(['mantenimientos/addproducto/'+ProductoId]);
  }
  Activar(form: DataProducto, i: number) {
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
        this.mantemientosService
          .ActivarProducto(form.id, bodyform)
          .subscribe((resp) => {
            this.toastr.success('Activo');
            this.ngOnInit();
          });
      }
    });
  }
  Inactivar(form: DataProducto, i: number) {
    Swal.fire({
      title: 'Esta seguro que desea Anular?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.mantemientosService
          .InactivarProducto(form.id)
          .subscribe((resp) => {
            this.toastr.error('Inactivo');
            this.ngOnInit();
          });
      }
    });
  }
}
