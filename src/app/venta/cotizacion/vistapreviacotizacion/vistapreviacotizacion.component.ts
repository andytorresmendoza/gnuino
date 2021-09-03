 
import { VentaService } from '../../../services/venta/venta.service';
import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms'; 
import Swal from 'sweetalert2'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DataDetalleCotizacionVentaCambio } from '../../../models/detalle-cotizacionVentaCambio';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoCoti } from '../../../models/tipo-cotizacion';
import { DataCliente } from '../../../models/cliente';
 


@Component({
  selector: 'app-vistapreviacotizacion',
  templateUrl: './vistapreviacotizacion.component.html',
  styleUrls: ['./vistapreviacotizacion.component.css']
})
export class VistapreviacotizacionComponent implements OnInit {
  
  detallecotizacionventa: DataDetalleCotizacionVentaCambio[]= [];
  tipocotizacion: DataTipoCoti[];
  clientes: DataCliente[] = [];
  constructor(  @Inject(MAT_DIALOG_DATA) public data,
  public ventaService: VentaService,
    private dialog: MatDialog,
  private toastr: ToastrService,
   private router: Router,private currentRoute: ActivatedRoute, private mantenimientosService: MantenimientosService 
  ) { }

  ngOnInit(): void { 
     this.ventaService.getCotizacionById(this.data.id) 
     .subscribe(resp => {
      this.ventaService.formData = resp[0];   
      this.ventaService.detalleCotizacion = resp[0].detalleCotizacion; 
    });
 



    this.mantenimientosService.getTipCotizacionVenta()
    .subscribe(resp => {
      this.tipocotizacion = resp as DataTipoCoti[]   
   });
    

this.mantenimientosService.getCliente().subscribe(resp => {  
  this.clientes = (resp as DataCliente[])
  .map(clientes=>{ 
   clientes.nombre_cliente =   (clientes.nombre_cliente.concat(', ', clientes.apellidos_pat_cliente,' ',clientes.apellidos_mat_cliente))
    return clientes;
  }); 
});
  }
  
}