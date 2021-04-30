import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { EditdetalleentradaalmacenComponent } from '../editdetalleentradaalmacen/editdetalleentradaalmacen.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editingresoalmacen',
  templateUrl: './editingresoalmacen.component.html',
  styleUrls: ['./editingresoalmacen.component.css']
})
export class EditingresoalmacenComponent implements OnInit {

  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getIngresoAlmacenById(+id).subscribe(res => {
      // console.log('editar',res[0] );
     
      // console.log('editar',res );
       this.kardexService.formDataEntrada = res[0]; 
      this.kardexService.detalleIngresoAlmacen = res[0].detalleIngresoSedeAlamacen;
    });
  }

  AddOrEditOrderItem(orderItemIndex, id) {
    // console.log(orderItemIndex, id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { orderItemIndex, id };
    // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
     this.dialog.open(EditdetalleentradaalmacenComponent, dialogConfig).afterClosed().subscribe(resp=>{
    //  console.log(resp);
      // this.updateTotal();
     });
   
    }
    onSubmit(form:NgForm){
      // console.log(form);
  
        this.kardexService.GuardaEditIngresoAlmacen().subscribe(res =>{
          console.log('respuesta',res);
          // this.toastr.success(res.msg );
          this.ngOnInit();
          //  this.resetForm();
       
        //  this.router.navigate(["../kardex/listarentrada"]);
       }) 
     
     }


}
