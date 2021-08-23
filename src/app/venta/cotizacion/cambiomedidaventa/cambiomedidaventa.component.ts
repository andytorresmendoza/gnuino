 
import { VentaService } from '../../../services/venta/venta.service';
import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms'; 
import Swal from 'sweetalert2'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DataDetalleCotizacionVenta } from '../../../models/detalle-cotizacionVenta';
import { DetallecotizacioncambioComponent } from '../detallecotizacioncambio/detallecotizacioncambio.component';
import { DataDetalleCotizacionVentaCambio } from '../../../models/detalle-cotizacionVentaCambio';
 

@Component({
  selector: 'app-cambiomedidaventa',
  templateUrl: './cambiomedidaventa.component.html',
  styleUrls: ['./cambiomedidaventa.component.css']
})

export class CambiomedidaventaComponent implements OnInit {

  
detallecotizacionventa: DataDetalleCotizacionVentaCambio[]= [];
 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,public ventaService: VentaService,  private dialog: MatDialog,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute 
    ) {

     }
  ngOnInit(): void {
this.getListCambioMedida();
  }
  getListCambioMedida(){ 
    this.ventaService.getCotizacionById(this.data.id) 
   .subscribe(resp => {
    // this.dataSource.data = resp[0].detalleCotizacion as DataDetalleCotizacionVenta[]; 
    this.ventaService.detalleCotizacionVentaCambio = resp[0].detalleCotizacion;
    console.log(this.ventaService.detalleCotizacionVentaCambio);
 
  });
}

AddCambio(orderItemIndex, id) { 
  console.log(orderItemIndex, id);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  dialogConfig.data = { orderItemIndex, id };

  // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
   this.dialog.open(DetallecotizacioncambioComponent, dialogConfig).afterClosed().subscribe(resp=>{
  //  console.log(resp);
    // this.updateTotal();
    // this. updateMontoTotal();
   });
 
  }
  /*onSubmit(form:NgForm) {
    console.log(form.value,'value');
    this.ventaService.saveCambioMedida().subscribe(res =>{
      this.ngOnInit();
  console.log(res,'respuesta');
      // this.resetForm();
      // this.toastr.success(res.msg );
          this.router.navigate(["../venta/listarventa"]);
    });

  } */
}