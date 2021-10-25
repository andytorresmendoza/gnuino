import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VentaService } from '../../../services/venta/venta.service';

@Component({
  selector: 'app-vistapreviadeliverytodos',
  templateUrl: './vistapreviadeliverytodos.component.html',
  styleUrls: ['./vistapreviadeliverytodos.component.css']
})
export class VistapreviadeliverytodosComponent implements OnInit {
  public formData:any
  vistaprevia:any[]= [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private ventaService: VentaService) { }

  ngOnInit(): void {
    this.ventaService.getListarDeliveryTodosById(this.data.id).subscribe((res) => {
      // console.log(res);
      this.formData = res[0].detalleOrdenVenta[0];
      this.vistaprevia = res[0].detalleOrdenVenta[0].detalleCotizacion[0].detalleCotizacion;
    });
  }

}
