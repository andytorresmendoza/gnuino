import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DetalletransferenciasinocComponent } from '../detalletransferenciasinoc/detalletransferenciasinoc.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addtransferenciasinoc',
  templateUrl: './addtransferenciasinoc.component.html',
  styleUrls: ['./addtransferenciasinoc.component.css']
})
export class AddtransferenciasinocComponent implements OnInit {

  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getSalidasinOCsById(+id).subscribe(res => {
     this.kardexService.formDatatransferenciasinoc = res[0]; 
   this.kardexService.detalleTransferenciasinoc =  res[0].detalleIngresoSinOc
      // console.log(res[0]); 
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
  // console.log(o);
   this.dialog.open(DetalletransferenciasinocComponent, dialogConfig).afterClosed().subscribe(resp=>{

   });
 
  }

  onSubmit(form:NgForm){
    // console.log(form);
         this.kardexService.GuardaTransferenciaSinOcAlmacen().subscribe(resp =>{ /*falta */
      //  console.log('respuesta',resp);
          // this.resetForm();
     
          this.toastr.success('Se realizo la Transferencia Exitosamente');
          //  resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success(resp.msg )
          this.router.navigate(["../kardex/transferenciassinoc"]);
     
        })  
      }

}
