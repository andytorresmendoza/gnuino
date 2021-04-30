import { Component, OnInit, Inject } from '@angular/core';
 
import { KardexService } from '../../../services/kardex/kardex.service'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { DataOrdenCompra } from '../../../models/ordencompra';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarordencompra',
  templateUrl: './listarordencompra.component.html',
  styleUrls: ['./listarordencompra.component.css']
})
export class ListarordencompraComponent implements OnInit {

  Ordenes:DataOrdenCompra[]=[];
  cargando = true; 
  constructor
  (private servicioKardex: KardexService , private router:Router) { }

  ngOnInit(): void {
    this.getOrdenCompra(); 
  }

  getOrdenCompra(){

    this.servicioKardex.getOrdenCompra()
   .subscribe(resp => {
     
      this.Ordenes = resp; 
      this.cargando = false;
     console.log(resp);
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
  console.log(ordenes.id);
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
       
    //  resp   console.log(resp);
         //  console.log(resp);
      }

      );
    }
  });
} 
}
