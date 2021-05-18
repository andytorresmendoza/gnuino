import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { EditdetalleentradaalmacenComponent } from '../editdetalleentradaalmacen/editdetalleentradaalmacen.component';
import { NgForm } from '@angular/forms';
import { DataProveedor } from '../../../models/proveedor';
import { DataEmpleado } from '../../../models/empleado';
import { DataTipoIngreso } from '../../../models/tipoingreso';

@Component({
  selector: 'app-editingresoalmacen',
  templateUrl: './editingresoalmacen.component.html',
  styleUrls: ['./editingresoalmacen.component.css']
})
export class EditingresoalmacenComponent implements OnInit {
  isButtonVisible:boolean=true;
  proveedores:  DataProveedor[];
  empleados:  DataEmpleado[];
  tipoingresos: DataTipoIngreso[];
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getIngresoAlmacenById(+id).subscribe(res => {
 
      //  console.log('editar',res );
       this.kardexService.formDataEntrada = res[0]; 
      this.kardexService.detalleIngresoAlmacen = res[0].detalleIngresoSedeAlamacen;  
       this.kardexService.formOrdencompra = res[0].detalleOrden[0];   
       this.kardexService.detalleIngresoAlmacen = res[0].detalleIngresoSedeAlamacen;
       this.kardexService.formOrdencompra.nombre_empleado = res[0].detalleOrden[0].detalleEmpleado[0].nombre_empleado; 
       this.kardexService.formOrdencompra.nombre_proovedor = res[0].detalleOrden[0].detalleProovedor[0].nombre_proovedor; 
       this.kardexService.formDataEntrada.descripcion_ingreso = res[0].detalleTipoIngreso[0].descripcion_ingreso; 
      //  console.log(res[0].detalleTipoIngreso[0].descripcion_ingreso);
      // console.log(res[0].idFlujo);
      if (res[0].idFlujo ==  2 || res[0].idFlujo ==  3 ) {
        this.isButtonVisible=false;
       } else { /*implementar  EN ORDEN Y COTIZAICON ANULADA*/
        this.isButtonVisible=true;
       }

 
    });

this.kardexService.formOrdencompra
    this.mantenimientosService.getProveedor().subscribe((resp) => {
      this.proveedores = resp as DataProveedor[];
      // console.log(this.productos);
    });
    this.mantenimientosService.getEmpleado().subscribe((resp) => {
      this.empleados = resp as DataEmpleado[];
      //  console.log(this.empleados);
    });
    this.mantenimientosService.getTipoingreso().subscribe((resp) => {
      this.tipoingresos = resp as DataTipoIngreso[];
      // console.log(this.cuentas);
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
  // console.log(resp);
      // this.updateTotal();
     });
   
    }
    onSubmit(form:NgForm){
      // console.log(form);
  
        this.kardexService.GuardaEditIngresoAlmacen().subscribe(res =>{
          // console.log('respuesta',res);
        this.toastr.success(res.msg );
          this.ngOnInit();
            // this.resetForm();
       
          // this.router.navigate(["../kardex/listarentrada"]);
       }) 
     
     }


}
