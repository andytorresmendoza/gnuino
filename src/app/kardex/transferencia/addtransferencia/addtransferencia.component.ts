import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoIngreso } from '../../../models/tipoingreso';
import { DetalletransferenciaComponent } from '../detalletransferencia/detalletransferencia.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addtransferencia',
  templateUrl: './addtransferencia.component.html',
  styleUrls: ['./addtransferencia.component.css']
})
export class AddtransferenciaComponent implements OnInit {
  tipoingresos: DataTipoIngreso[];
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}


  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getSalidaProductosById(+id).subscribe(res => {
      //  console.log(res[0]);

  this.kardexService.formDataTransferencia = res[0];     
    // console.log(this.kardexService.formDataTransferencia );   
  this.kardexService.detalleTransferencia = res[0].detalleIngresoSedeAlamacen;  
this.kardexService.formDataTransferencia.descripcion_ingreso = res[0].detalleTipoIngreso[0].descripcion_ingreso; 
console.log(this.kardexService.detalleTransferencia,'DETALLE');
console.log(this.kardexService.formDataTransferencia,'CABECERA');
  });
  this.mantenimientosService.getTipoingreso().subscribe((resp) => {
    this.tipoingresos = resp as DataTipoIngreso[];
    // console.log(this.cuentas);
  });
  }
  AddOrEditOrderItem(orderItemIndex, id) {
    //  console.log(orderItemIndex, id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
  // dialogConfig.height = "48%";
    dialogConfig.data = { orderItemIndex, id }; 
     this.dialog.open(DetalletransferenciaComponent, dialogConfig).afterClosed().subscribe(resp=>{
  
     });
   
    }

    onSubmit(form:NgForm){
//  console.log(form);
      this.kardexService.GuardaTransferenciaAlmacen().subscribe(resp =>{ /*falta */
    // console.log('respuesta',resp);
       // this.resetForm();
  
       this.toastr.success('Se realizo la Transferencia Exitosamente');
      //  resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success(resp.msg )
      this.router.navigate(["../kardex/transferencias"]);
  
     })  
   }

}
