import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DetallesalidaproductoComponent } from '../detallesalidaproducto/detallesalidaproducto.component';
@Component({
  selector: 'app-addsalidaproducto',
  templateUrl: './addsalidaproducto.component.html',
  styleUrls: ['./addsalidaproducto.component.css']
})
export class AddsalidaproductoComponent implements OnInit {

  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getSalidaProductosById(+id).subscribe(res => {
        console.log(res[0]);

    // this.kardexService.formDataEntrada = res[0];        
    this.kardexService.detalleSalida = res[0].detalleIngresoSedeAlamacen; 
      // console.log('ngoniti',this.kardexService.detalleIngresoAlmacen);

    });

  } 
  AddOrEditOrderItem(orderItemIndex, id) {
     console.log(orderItemIndex, id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    // dialogConfig.height = "48%";
    dialogConfig.data = { orderItemIndex, id };
    console.log(dialogConfig.data);
    // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
     this.dialog.open(DetallesalidaproductoComponent, dialogConfig).afterClosed().subscribe(resp=>{
     console.log(resp);
      // this.updateTotal();
     });
   
    }

}
