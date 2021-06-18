import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataProveedor } from '../../../models/proveedor';
import { DataEmpleado } from '../../../models/empleado';
import { DataTipoIngreso } from '../../../models/tipoingreso';
import { DataProducto } from 'src/app/models/producto';
import { EditdetalleentradasinocComponent } from '../editdetalleentradasinoc/editdetalleentradasinoc.component';
import { HistoricosinocComponent } from '../historicosinoc/historicosinoc.component';
@Component({
  selector: 'app-editentradasinoc',
  templateUrl: './editentradasinoc.component.html',
  styleUrls: ['./editentradasinoc.component.css']
})
export class EditentradasinocComponent implements OnInit {
  proveedores: DataProveedor[];
  empleados: DataEmpleado[];
  productos: DataProducto[]; 
  tipoingresos:DataTipoIngreso[] ;
  isButtonVisible:boolean=true;
  isValid:boolean = true;
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getIngresoSinOCById(+id).subscribe(res => {
      // console.log('editar',res[0]); 
            // console.log('editar',res[0] );
             this.kardexService.formDataIngresosinOc = res[0]; 
             this.kardexService.formDataIngresosinOc.nombre_empleado = res[0].detalleEmpleado[0].nombre_empleado; 
             this.kardexService.formDataIngresosinOc.nombre_proovedor = res[0].detalleProovedor[0].nombre_proovedor; 
            this.kardexService.detalleIngresosinOc = res[0].detalleIngresoSinOc;
           // console.log( res[0])
           // console.log('res', this.kardexService.detalleIngresosinOc);
            //  console.log('detalle',res[0].detalleIngresoSinOc[0].estadoflujo);
            if (res[0].idFlujo ==  2 || res[0].idFlujo ==  3 ) {
            this.isButtonVisible=false;
           } else { 
            this.isButtonVisible=true;
           }  
          });

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
          this.mantenimientosService.getTipoingreso()
          .subscribe(resp => {
           
            this.tipoingresos = resp as DataTipoIngreso[]  
           //  console.log(resp);
         });
  }

  AddOrEditOrderItem(orderItemIndex, id) {
    //  console.log(orderItemIndex, id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { orderItemIndex, id };
    // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
     this.dialog.open(EditdetalleentradasinocComponent, dialogConfig).afterClosed().subscribe(resp=>{
      // console.log(resp);
      this.updateTotal();
     });
   
    }
    updateTotal(){
      this.kardexService.formDataIngresosinOc.totalCosto = this.kardexService.detalleIngresosinOc.reduce(
        (prev,curr)=>{
      
       let prevparse =  prev.toString();
       let total =  curr.precioTotal.toString();
       // console.log('prev', parseInt(prevparse),'-',curr.precio_total); 
          return   parseFloat(prevparse)+ parseFloat(total)
          
       },0); 
       this.kardexService.formDataIngresosinOc.totalCosto  = parseFloat(this.kardexService.formDataIngresosinOc.totalCosto.toFixed(2));
   //  console.log('tota',this.kardexService.formData.total_costo);
   
     } 
     onChange = ($event: any): void => {
      this.kardexService.formDataIngresosinOc.nombre_empleado= $event.nombre_empleado; 
       
     } 
     onChangeProveedor = ($event: any): void => {
      this.kardexService.formDataIngresosinOc.nombre_proovedor= $event.nombre_proovedor; 
       
     } 
     onChangeTipoIngreso = ($event: any): void => {
      this.kardexService.formDataIngresosinOc.descripcion_ingreso= $event.descripcion_ingreso; 
       
     } 
     validateForm(){
      this.isValid = true; 
       if(this.kardexService.detalleIngresosinOc.length==0)
      this.isValid=false;
      return this.isValid;
    }
    HistoricoSinOc( id) {
      console.log(id,'historico');
     const dialogConfig = new MatDialogConfig();
     dialogConfig.autoFocus = true;
     dialogConfig.disableClose = true;
     dialogConfig.width = "50%";
     dialogConfig.data = { id };
     // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
      this.dialog.open(HistoricosinocComponent, dialogConfig).afterClosed().subscribe(resp=>{
   // console.log(resp);
       // this.updateTotal();
      });
    
     }
    onSubmit(form:NgForm){
   //   this.validateForm();
      // console.log(form);
     
      this.kardexService.UpdateIngresoSinOC(this.kardexService.formDataIngresosinOc).subscribe(
        resp=>{
          // console.log(resp);
          this.ngOnInit();
          this.toastr.success('Actualizado Exitosamente','Gnuino');

        //  this.router.navigate(["../kardex/listarentradasinoc"]);
        }
      )
    }
    
   
}
