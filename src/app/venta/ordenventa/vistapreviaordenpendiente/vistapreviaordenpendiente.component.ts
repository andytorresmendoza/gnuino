import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VentaService } from '../../../services/venta/venta.service';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vistapreviaordenpendiente',
  templateUrl: './vistapreviaordenpendiente.component.html',
  styleUrls: ['./vistapreviaordenpendiente.component.css']
})
export class VistapreviaordenpendienteComponent implements OnInit {
  public formData:any
  vistaprevia:any[]= [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<VistapreviaordenpendienteComponent>,
    public ventaService: VentaService,
    private mantenimientosService: MantenimientosService,private currentRoute: ActivatedRoute, private router: Router, private toastr: ToastrService

  ) {}

  ngOnInit(): void {
    this.ventaService.getOrdenCompraVentaById(this.data.id).subscribe((res) => {
      //  console.log('verdataid',res );
      // console.log(res);
        this.formData = res[0]; 
        this.vistaprevia = res[0].detalleCotizacion[0].detalleCotizacion
 
              });
  }

}
