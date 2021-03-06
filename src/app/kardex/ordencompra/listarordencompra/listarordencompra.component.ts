import { Component, OnInit, ViewChild } from '@angular/core';
 
import { KardexService } from '../../../services/kardex/kardex.service'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { DataOrdenCompra } from '../../../models/ordencompra';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listarordencompra',
  templateUrl: './listarordencompra.component.html',
  styleUrls: ['./listarordencompra.component.css']
})
export class ListarordencompraComponent implements OnInit {

  Ordenes:DataOrdenCompra[]=[];
  cargando = true; 

  displayedColumns: string[] = ['Orden Nro', 'Nro Cotizacion', 'Empleado', 'Proveedor','Estado','details','Anular'];
  dataSource = new MatTableDataSource<DataOrdenCompra>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sort:any;
   @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor
  (private servicioKardex: KardexService , private router:Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOrdenCompra(); 
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getOrdenCompra(){

    this.servicioKardex.getOrdenCompra()
   .subscribe(resp => {
    this.dataSource.data = resp as DataOrdenCompra[]; 
      this.Ordenes = resp; 
      this.cargando = false;
      //  console.log(resp);
  });
}
openForEdit(OrdenId:number):void { 
  // this.router.navigate(['kardex/ordencompra/'+OrdenId]);
  this.router.navigate(['kardex/editordencompra/'+OrdenId]); 
 
}
borrarOrden(ordenes: DataOrdenCompra, i: number) {
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Eliminar la cotizacion Nro${ordenes.codigo_orden_num}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.Ordenes.splice(i, 1);
      this.servicioKardex.deleteOrden(ordenes.id).subscribe();
    }
  });
} 
 
EstadoOrdenAnular(ordenes: DataOrdenCompra, i: number) {

  const bodyform = {id:ordenes.id, estadoOrden: '3'}
  // console.log(ordenes.id);
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Anular la cotizacion Nro${ordenes.codigo_orden_num}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      
      this.Ordenes.splice(i, 1);
      this.servicioKardex.EstadoOrdenAnular(ordenes.id,bodyform).subscribe(
        resp => { 
          this.toastr.error('Orden Venta Anulada');
          this.ngOnInit();
    
    
      }

      );
    }
  });
} 
}
