import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DetalledevolucionsinocComponent } from '../detalledevolucionsinoc/detalledevolucionsinoc.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-adddevolucionsinoc',
  templateUrl: './adddevolucionsinoc.component.html',
  styleUrls: ['./adddevolucionsinoc.component.css']
})
export class AdddevolucionsinocComponent implements OnInit {
  isButtonVisible: boolean = true;
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getSalidasinOCsById(+id).subscribe(res => {
      this.kardexService.formDataDevolucionesSinOc = res[0]; 
    this.kardexService.detalleDevolucionesSinOC =  res[0].detalleIngresoSinOc
     // console.log(this.kardexService.detalleDevolucionesSinOC); 
     });
  }

  AddOrEditOrderItem(orderItemIndex, id) {
    // console.log(orderItemIndex, id);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "55%";
  // dialogConfig.height = "48%";
  dialogConfig.data = { orderItemIndex, id }; 
   this.dialog.open(DetalledevolucionsinocComponent, dialogConfig).afterClosed().subscribe(resp=>{

   });
 
  }
  onSubmit(form:NgForm){
    this.isButtonVisible = false;
    this.kardexService.GuardaDevolucionSinOc().subscribe(resp =>{ /*falta */
  // console.log('respuesta',resp);
     // this.resetForm();

     this.toastr.success('Se realizo la Devolución Exitosamente');
     //  resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success(resp.msg )
  this.router.navigate(["../kardex/devolucionessinoc"]);

   })  
 }
}
