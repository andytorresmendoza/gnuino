import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoIngreso } from '../../../models/tipoingreso';
import { DetalledevolucionComponent } from '../detalledevolucion/detalledevolucion.component';
@Component({
  selector: 'app-adddevolucion',
  templateUrl: './adddevolucion.component.html',
  styleUrls: ['./adddevolucion.component.css']
})
export class AdddevolucionComponent implements OnInit {
  tipoingresos: DataTipoIngreso[];
  isButtonVisible: boolean = true;
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getSalidaProductosById(+id).subscribe(res => {
      console.log(res[0]);

    this.kardexService.formDataDevoluciones = res[0];  
     
    this.kardexService.detalleDevoluciones = res[0].detalleIngresoSedeAlamacen;  
 //   console.log( this.kardexService.detalleDevoluciones,'detalle');
    this.kardexService.formDataDevoluciones.descripcion_ingreso = res[0].detalleTipoIngreso[0].descripcion_ingreso; 
    });

  this.mantenimientosService.getTipoingreso().subscribe((resp) => {
    this.tipoingresos = resp as DataTipoIngreso[];
    // console.log(this.cuentas);
  });
}

AddOrEditOrderItem( orderItemIndex,id) {
     console.log(orderItemIndex, id); 
  const dialogConfig = new MatDialogConfig();
  
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "55%";
  // dialogConfig.height = "48%";
  dialogConfig.data = {  orderItemIndex,id }; 
  // console.log( orderItemIndex,id);
   this.dialog.open(DetalledevolucionComponent, dialogConfig).afterClosed().subscribe(resp=>{
// console.log('cerro',resp);
   });
 
  }
  onSubmit(form:NgForm){
//  console.log(form.value);
this.isButtonVisible = false;
    this.kardexService.GuardaDevolucionAlmacen().subscribe(resp =>{ /*falta */
  //  console.log('respuesta',resp); 
   this.toastr.success('Se realizo la Devolución Exitosamente');
    // resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success(resp.msg )
      this.router.navigate(["../kardex/devoluciones"]);

   })  
 }
}
