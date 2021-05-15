import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DetallesalidaproductoComponent } from '../detallesalidaproducto/detallesalidaproducto.component';
import { DataTipoIngreso } from '../../../models/tipoingreso';
@Component({
  selector: 'app-addsalidaproducto',
  templateUrl: './addsalidaproducto.component.html',
  styleUrls: ['./addsalidaproducto.component.css']
})
export class AddsalidaproductoComponent implements OnInit {
  tipoingresos: DataTipoIngreso[];
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getSalidaProductosById(+id).subscribe(res => {
        //  console.log(res[0]);

    this.kardexService.formDataSalida = res[0];     
    //  console.log(this.kardexService.formDataSalida );   
    this.kardexService.detalleSalida = res[0].detalleIngresoSedeAlamacen; 
  this.kardexService.formDataSalida.descripcion_ingreso = res[0].detalleTipoIngreso[0].descripcion_ingreso; 
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
     this.dialog.open(DetallesalidaproductoComponent, dialogConfig).afterClosed().subscribe(resp=>{
 
     });
   
    }
    onSubmit(form:NgForm){
 
         this.kardexService.GuardaSalidaAlmacen().subscribe(resp =>{ /*falta */
        // console.log('respuesta',resp);
          // this.resetForm();

          this.toastr.success('Actualizado Exitosamente');
          //  resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success(resp.msg )
          this.router.navigate(["../kardex/salidas"]);
   
        })  
      }
}
