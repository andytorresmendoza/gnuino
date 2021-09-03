import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { VentaService } from '../../../services/venta/venta.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router'; 
import { DataCliente } from '../../../models/cliente';
import { DataTipoCoti } from '../../../models/tipo-cotizacion';
@Component({
  selector: 'app-vistapreviadirecta',
  templateUrl: './vistapreviadirecta.component.html',
  styleUrls: ['./vistapreviadirecta.component.css']
})
export class VistapreviadirectaComponent implements OnInit {
  clientes: DataCliente[]; 
  tipocotizacion: DataTipoCoti[];

  constructor(  @Inject(MAT_DIALOG_DATA) public data, public ventaService: VentaService,
    // public kardexService: KardexService,  
     private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute 
    ) {

     }

  ngOnInit(): void {
    this.ventaService.getVentaDirectaById(this.data.id).subscribe(res => {
     
       this.ventaService.formVenta = res[0];  
      this.ventaService.detalleVentaDirecta = res[0].detalleCotizacion; 
    });

    this.mantenimientosService.getTipCotizacionVenta()
   .subscribe(resp => {
     this.tipocotizacion = resp as DataTipoCoti[]  
  });
  this.mantenimientosService.getCliente().subscribe(resp => {
    // console.log(resp);
    this.clientes = (resp as DataCliente[])
    .map(clientes=>{
      // clientes.nombre_cliente = clientes.nombre_cliente.toUpperCase();
     clientes.nombre_cliente =   (clientes.nombre_cliente.concat(', ', clientes.apellidos_pat_cliente,' ',clientes.apellidos_mat_cliente,'- ',clientes.dni_cliente))
      return clientes;
    });
  });
  }

 
}
