import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataDetalleCotizacion } from 'src/app/models/detalle-cotizacion';
import { DataDetalleCotizacionVenta } from 'src/app/models/detalle-cotizacionVenta';
import { DataProducto } from 'src/app/models/producto';
import { DataTipoAlmacen } from 'src/app/models/tipoalmacen';
// import { KardexService } from 'src/app/services/kardex/kardex.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { VentaService } from '../../../services/venta/venta.service';
import Swal from 'sweetalert2';
import { DataDetalleCotizacionVentaCambio } from '../../../models/detalle-cotizacionVentaCambio';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-detallecotizacioncambio',
  templateUrl: './detallecotizacioncambio.component.html',
  styleUrls: ['./detallecotizacioncambio.component.css'],
})
export class DetallecotizacioncambioComponent implements OnInit {
  formData: DataDetalleCotizacionVentaCambio;
  productos: DataProducto[];
  almacen: DataTipoAlmacen[];
  arreglo: any[] = [];
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetallecotizacioncambioComponent>,
    // public kardexService: KardexService,
    public ventaService: VentaService,
    private mantenimientosService: MantenimientosService,  private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];

      //  console.log(this.productos,'producto');
    });

    this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
      this.almacen = resp as DataTipoAlmacen[];
      //  console.log('principal', this.almacen);
    });

    if (this.data.orderItemIndex == null)
      this.formData = {
        id: null,
        idCotizacionVenta: this.data.id,
        idProducto: null,
        nombre_producto: '',
        cantidad: 0,
        precioVenta: 0,
        stock: 0,
        observacion: '',
        codigo_cotizacion_num: '',
        detalleNameUnidadMedida: '',
        idAlmacen: null,
        nombre_alamcen: '',
        precioVentaAntiguo: 0,
      };
    // console.log(this.ventaService.detalleCotizacion,'QUE TRAE');
    //  console.log(almacen, producto);
    else
      this.formData = Object.assign(
        {},
        this.ventaService.detalleCotizacionVentaCambio[this.data.orderItemIndex]
      );
    this.onChangeMatch(
      this.ventaService.detalleCotizacionVentaCambio[this.data.orderItemIndex]
        .idProducto,
      this.ventaService.detalleCotizacionVentaCambio[this.data.orderItemIndex]
        .idAlmacen
    );
  }

  onChangeMatch(idProducto: number, idAlmacen: number) {
    this.ventaService
      .MatchKardex(idProducto, idAlmacen)
      .subscribe((resp: any) => {
        this.formData.precioVenta = resp.precioVenta;
        this.formData.stock = resp.cantidad;
      });
  }
  onChange = ($event: any): void => {
    this.formData.nombre_producto = $event.nombre_producto;
    this.formData.detalleNameUnidadMedida =
      $event.detalleUnidadMedida[0].detalle;
  };

  onChangeAlmacen = ($event: any): void => {
    this.formData.nombre_alamcen = $event.nombre_alamcen;
  };
  validateSelect(form: NgForm) {
    if (this.formData.idProducto == null)
      return Swal.fire({
        title: 'Seleccionar Producto',
        icon: 'error',
      });
    else if (this.formData.idAlmacen == null)
      return Swal.fire({
        title: 'Seleccionar Almacén',
        icon: 'error',
      });
    else if (this.formData.stock == null)
      return Swal.fire({
        title: 'No existe Stock',
        icon: 'error',
      });
      else if (this.formData.precioVenta == null)
      return Swal.fire({
        title: 'No existe Precio Venta',
        icon: 'error',
      });
  }
  onSubmit(form:NgForm) {
     console.log(form.value);

       const bodyform = {id:this.formData.id, idAlmacen:this.formData.idAlmacen, idProducto:this.formData.idProducto,cantidad:this.formData.cantidad} 
     if (this.validateSelect(form)) {
      return;
    } else if (
      form.value.cantidad > form.value.stock ||
      form.value.cantidad <= 0
    ) {
      return Swal.fire({
        // title: 'Solo Existen ' + form.value.stock + ' Productos en Stock',
        text: 'Cantidad Invalida',
        icon: 'error',
      });
    } else if (form.value.precioVenta !== form.value.precioVentaAntiguo) {
      return Swal.fire({
       
        title: 'Los Precios de los productos deben ser iguales',
        text: 'Precio Invalido',
        icon: 'error',
      });
    }  
 
     this.ventaService.saveCambioMedida(this.formData.id, bodyform).subscribe(resp =>{   
      console.log(resp);
      this.toastr.success('Salida Exitosamente');
      this.dialogRef.close();
      
     });     
   /* else if (this.validateForm(form.value)) {
      if (this.data.orderItemIndex == null)
        this.ventaService.detalleCotizacionVentaCambio.push(form.value);
      else
        this.ventaService.detalleCotizacionVentaCambio[
          this.data.orderItemIndex
        ] = form.value;
      this.dialogRef.close();
    }*/
  }

  validateForm(formData: DataDetalleCotizacionVentaCambio) {
    this.isValid = true;
    if (formData.id == 0) this.isValid = false;
    else if (formData.cantidad == 0) this.isValid = false;
    return this.isValid;
  }
}
