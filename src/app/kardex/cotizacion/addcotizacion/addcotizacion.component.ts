import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';


import { KardexService } from '../../../services/kardex/kardex.service';
import { DetallecotizacionComponent } from '../detallecotizacion/detallecotizacion.component';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataProveedor } from '../../../models/proveedor';
import { DataEmpleado } from '../../../models/empleado';
import * as moment from 'moment'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DataCotizacion } from 'src/app/models/cotizacion';
import { DataDetalleCotizacion } from '../../../models/detalle-cotizacion';
import { DataProducto } from 'src/app/models/producto';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-addcotizacion',
  templateUrl: './addcotizacion.component.html',
  styleUrls: ['./addcotizacion.component.css']
}) 
 
export class AddcotizacionComponent implements OnInit {
  proveedores: DataProveedor[];
  empleados: DataEmpleado[];
  productos: DataProducto[];
  selectedFecha: DataCotizacion[];
  isValid:boolean = true;
  //  detalleCotizacion: DataDetalleCotizacion[] = [];
 
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.kardexService.getCotizacionById(+id).subscribe(res => {
        // console.log('editar',res[0] );
       
        console.log('editar',res );
         this.kardexService.formData = res[0]; 
        this.kardexService.detalleCotizacion = res[0].detalleCotizacion;
      });
  
    }else{
           this.resetForm();
     
    }

    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  
   });
 
    this.mantenimientosService.getProveedor()
    .subscribe(resp => {
      this.proveedores = resp as DataProveedor[]  
   });
   this.mantenimientosService.getEmpleado()
   .subscribe(resp => {
    
     this.empleados = resp as DataEmpleado[]  
    //  console.log(resp);
  });

  }


  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.kardexService.formData={        
      id:null,
      nroCotizacion: '',
      idProovedor: 0,
      idEmpleado:0,
      detalle:'',
      fecha_entrega:'2021-04-14',
      descuento_cot:0,
      costo_envio:0,
      total_costo:0,
      // detalleCotizacion: [this.kardexService.detalleCotizacion[0]]
 };
this.kardexService.detalleCotizacion = [];

}

  onChangeEvent(event){

    const m = moment(event.value);
    event = m.format("YYYY-MM-D" );
 this.selectedFecha = event;
   console.log(event);

 
}
 AddOrEditOrderItem(orderItemIndex, id) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  dialogConfig.data = { orderItemIndex, id };
  // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
   this.dialog.open(DetallecotizacionComponent, dialogConfig).afterClosed().subscribe(resp=>{
    this.updateTotal();
   });
 
  }
  onDeleteOrderItem(id:number, i:number){
    // console.log(id);
    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta seguro que desea eliminar`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
    // if (id != null) 
    this.kardexService.detalleCotizacion.splice(i,1); 
     this.kardexService.deleteDetalleCotizacion( id).subscribe();
      this.updateTotal();
      }
    });
  }
  
  updateTotal(){
   this.kardexService.formData.total_costo = this.kardexService.detalleCotizacion.reduce((prev,curr)=>{
      return prev + curr.precio_total},0);
    this.kardexService.formData.total_costo  = parseFloat(this.kardexService.formData.total_costo.toFixed(2));
  }
  validateForm(){
    this.isValid = true;
    if(this.kardexService.formData.idEmpleado==0)
    this.isValid=false;
    else if(this.kardexService.detalleCotizacion.length==0)
    this.isValid=false;
    return this.isValid;
  }


onSubmit(form:NgForm){
  // console.log(form);
  
  if (this.kardexService.formData.id) {
      console.log('submit',this.kardexService.formData);
    this.kardexService.UpdateOrder(this.kardexService.formData).subscribe(
      resp=>{
        // console.log(resp);
        this.toastr.success('Actualizado Exitosamente','Gnuino');
       this.router.navigate(["../kardex/listarcotizacion"]);
      }
    )
}else{
   this.kardexService.saveUpdateOrder().subscribe(res =>{
    this.resetForm();
    this.toastr.success('Guardado Exitosamente','Gnuino');
    this.router.navigate(["../kardex/listarcotizacion"]);
  })
}

}
}

