import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import { DataDetalleSalidaAlmacen } from '../../../models/detallesalidaalmacen';
import { DataProducto } from '../../../models/producto';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoSalida } from '../../../models/tiposalida';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSalidaProductos } from '../../../models/salidaproductoscerrados';
import { ToastrService } from 'ngx-toastr';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';

@Component({
  selector: 'app-detallesalidaproducto',
  templateUrl: './detallesalidaproducto.component.html',
  styleUrls: ['./detallesalidaproducto.component.css'],
})
export class DetallesalidaproductoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetallesalidaproductoComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService,private currentRoute: ActivatedRoute, private router: Router, private toastr: ToastrService

  ) {}

  formData: DataDetalleSalidaAlmacen;
  productos: DataProducto[];
  tiposalidas: DataTipoSalida[];
  almacenes: DataTipoAlmacen[]; 
  isValid: boolean = true;
  ngOnInit(): void {
 
   this.kardexService.getkardexById(this.data.id) 
    .subscribe(resp => {
     // this.dataSource.data = resp[0].detalleCotizacion as DataDetalleCotizacionVenta[]; 
     this.formData = resp[0];
     this.formData.detalleSalida = ' '
    //  console.log(resp,'que traer del kardex');
     // console.log(this.ventaService.detalleCotizacionVentaCambio);
  
   }); 
    this.mantenimientosService.getTipoAlmacen()
    .subscribe(resp => {
      this.almacenes = resp as DataTipoAlmacen[]   
     // console.log('principal', this.almacenes);
 });
    

    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
    //  console.log(this.productos,'producto');
    });

      this.mantenimientosService.getTiposalida().subscribe((resp) => {
     this.tiposalidas = resp as DataTipoSalida[];
     });

 
/*this.formData = Object.assign({ 
  id: null,
  idProducto:0, 
  cantidadGlobal: 0, 
  cantidadSalida: 0,
  idTipoSalida: null,
 // idTipoIngreso: 0,
  detalleSalida: '',
  fechaSalida: '',
  nombre_producto: '' ,
  descripcion_salida:'',
  idAlmacen1: 0
},
this.kardexService.detalleSalida[this.data.orderItemIndex]);
*/
}
 

  onChange = ($event: any): void => {
    this.formData.descripcion_salida = $event.descripcion_salida;
  };

  validateForm() {
    this.isValid = true;
    if (this.formData.idTipoIngreso == 0)
      this.isValid = false; 
      console.log(this.formData.idTipoIngreso);
    return this.isValid;
  }

  validateSelect(form:NgForm) {
    if(this.formData.idTipoSalida == null )
       return   Swal.fire({
          title: 'Seleccionar Tipo Salida' , 
          icon: 'error',
        });   
       
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.validateSelect(form)){
      return;
     }

   else if (
      form.value.cantidadSalida > form.value.cantidadIngresoOc ||
      form.value.cantidadSalida <= 0
    ) {
      return Swal.fire({
        title: form.value.cantidadIngresoOc + ' Productos en Stock',
        text: 'Cantidad Salida Invalida',
        icon: 'error',
      });
    } else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
      });

      return;
    } 
   
    else{   
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaSalida).format('YYYY-MM-DD');
      form.value.fechaSalida = fechaParseada; 
      this.kardexService.detalleSalida = form.value 
    this.kardexService.GuardaSalidaProducto().subscribe(resp =>{   
      this.toastr.success('Salida Exitosamente');
     });     
     this.dialogRef.close();
   
    } 
  }
}
