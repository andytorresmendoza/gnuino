import { Component, OnInit, Inject } from '@angular/core';
import { DataDetalleCotizacion } from '../../../models/detalle-cotizacion';
import { NgForm } from '@angular/forms';
import { DataProducto } from '../../../models/producto';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataProveedor } from '../../../models/proveedor';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataOrdenCompra } from '../../../models/ordencompra';
 

@Component({
  selector: 'app-listarordencompra',
  templateUrl: './listarordencompra.component.html',
  styleUrls: ['./listarordencompra.component.css']
})
export class ListarordencompraComponent implements OnInit {

  Ordenes:DataOrdenCompra[]=[];

  constructor
  (private servicioKardex: KardexService , private router:Router) { }

  ngOnInit(): void {
    this.getOrdenCompra(); 
  }

  getOrdenCompra(){

    this.servicioKardex.getOrdenCompra()
   .subscribe(resp => {
     
      this.Ordenes = resp; 
     console.log(resp);
  });
}

openForEdit(OrdenId: number) {

  this.router.navigate(['kardex/ordencompra/'+OrdenId]);
 
}
}
