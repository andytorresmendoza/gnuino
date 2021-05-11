import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DetallesalidasinocComponent } from '../detallesalidasinoc/detallesalidasinoc.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addsalidasinoc',
  templateUrl: './addsalidasinoc.component.html',
  styleUrls: ['./addsalidasinoc.component.css']
})
export class AddsalidasinocComponent implements OnInit {

  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}
  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getSalidasinOCsById(+id).subscribe(res => {
      console.log('add',res[0]);
       this.kardexService.formDataSalidasioc = res[0]; 
   this.kardexService.detalleSalidasinOC =  res[0].detalleIngresoSinOc
     

    });

    // this.mantenimientosService.getTipoingreso().subscribe((resp) => {
    //   this.tipoingresos = resp as DataTipoIngreso[];
    //   // console.log(this.cuentas);
    // });
  }
  AddOrEditOrderItem(orderItemIndex, id) {
      console.log(orderItemIndex, id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    // dialogConfig.height = "48%";
    dialogConfig.data = { orderItemIndex, id }; 
     this.dialog.open(DetallesalidasinocComponent, dialogConfig).afterClosed().subscribe(resp=>{
 
     });
   
    }
    onSubmit(form:NgForm){
 
      this.kardexService.GuardaSalidasinOC().subscribe(resp =>{ /*falta */
     // console.log('respuesta',resp);
       // this.resetForm();

       this.toastr.success('Actualizado Exitosamente');
       //  resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success(resp.msg )
       this.router.navigate(["../kardex/listarsalidasinoc"]);

     })  
   }

}
