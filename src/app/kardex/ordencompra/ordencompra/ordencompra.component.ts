import { Component, OnInit, Inject } from '@angular/core';
import { DataDetalleCotizacion } from '../../../models/detalle-cotizacion';
import { NgForm } from '@angular/forms';
import { DataProducto } from '../../../models/producto';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataProveedor } from '../../../models/proveedor';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataCotizacion } from '../../../models/cotizacion';
import { DataOrdenCompra, OrdenCompraI } from '../../../models/ordencompra';
import { DataEmpleado } from '../../../models/empleado';
import { DataTipoPago } from '../../../models/tipopago';
import { DataBanco } from '../../../models/banco';
import { DataNrocuenta } from '../../../models/nrocuenta';
import * as moment from 'moment';

@Component({
  selector: 'app-ordencompra',
  templateUrl: './ordencompra.component.html',
  styleUrls: ['./ordencompra.component.css'],
})
export class OrdencompraComponent implements OnInit {
  formData: DataDetalleCotizacion;

  cotizaciones: DataCotizacion[];
  proveedores: DataProveedor[];
  empleados: DataEmpleado[];
  tipopagos: DataTipoPago[];
  bancos: DataBanco[];
  cuentas: DataNrocuenta[]; 
  detalleCotizaciones: DataDetalleCotizacion[];
  selectFecha: DataOrdenCompra;
  isValid: boolean = true;

  constructor(
    public kardexService: KardexService,
    private dialog: MatDialog,
    private mantenimientosService: MantenimientosService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute
    
  ) {}

  ngOnInit(): void {

    
    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    // console.log(id);
    if (id !== 'nuevo') {
      this.kardexService.getOrdenCompraById(+id).subscribe((res) => {
        this.kardexService.formOrdencompra = res[0]; 
        // console.log(res[0]);
       this.SelectCotizacionDetalle(
       this.kardexService.formOrdencompra.idCotizacion
         
      );
     this.getCotizacionEstadoTodas();

      //  console.log( this.SelectCotizacionDetalle);
      });
    } else {
      this.resetForm();
     this.getCotizacionEstadoPendiente();
    
    }
    this.mantenimientosService.getProveedor().subscribe((resp) => {
      this.proveedores = resp as DataProveedor[];
      // console.log(this.productos);
    });


    this.mantenimientosService.getEmpleado().subscribe((resp) => {
      this.empleados = resp as DataEmpleado[];
      // console.log(this.productos);
    });
    this.mantenimientosService.getTipopago().subscribe((resp) => {
      this.tipopagos = resp as DataTipoPago[];
      // console.log(this.productos);
    });
    this.mantenimientosService.getBanco().subscribe((resp) => {
      this.bancos = resp as DataBanco[];
      //  console.log(this.bancos);
    });

    this.mantenimientosService.getNroCuenta().subscribe((resp) => {
      this.cuentas = resp as DataNrocuenta[];
      // console.log(this.cuentas);
    });

 
    // console.log(this.formData);
  }

   getCotizacionEstadoTodas() {
  this.kardexService.getCotizacionEstado().subscribe((resp) => {
       this.cotizaciones = resp as DataCotizacion[];
       console.log(resp);
   });
  }

  getCotizacionEstadoPendiente() {
    this.kardexService.getCotizacionEstadoPendiente().subscribe((resp) => {
      this.cotizaciones = resp as DataCotizacion[];
      console.log(resp);
   
    });
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.kardexService.formOrdencompra = {
      id: null,
      // nroCotizacion: '',
      idCotizacion: 0,
      idProovedor: 0,
      idEmpleado: 0,
      //  detalle: '',
      fecha_entrega: '',
      idTipoPago: 0,
      idBanco: 0,
      idNroCuenta: 0,
    };
  }

  UpdateNombre(ctrl) {
    this.kardexService.formOrdencompra.idCotizacion = this.cotizaciones[
      ctrl.selectedIndex - 1
    ].id;
    // this.kardexService.formOrdencompra.detalle = this.cotizaciones[ctrl.selectedIndex - 1].detalle;
    this.kardexService.formOrdencompra.idProovedor = this.cotizaciones[
      ctrl.selectedIndex - 1
    ].idProovedor;
    this.kardexService.formOrdencompra.idEmpleado = this.cotizaciones[
      ctrl.selectedIndex - 1
    ].idEmpleado;
  }
  UpdateBanco(ctrl) {
    console.log(ctrl);
    this.kardexService.formOrdencompra.idNroCuenta = this.bancos[
      ctrl.selectedIndex - 1
    ].idNroCuenta;
  }

  SelectCotizacionDetalle(id: number): void {
    this.kardexService.getCotizacionDetalleById(id).subscribe((response) => {
      this.detalleCotizaciones = response;
      // console.log('cotizaciondetalle', response);
    });
  }

  onChangeEvent(event) {
    const m = moment(event.value);
    console.log(m);
  event = m.format('YYYY-MM-D');
    
    // console.log(event);
    // this.kardexService.formOrdencompra.fecha_entrega = (event)
    this.kardexService.formOrdencompra.fecha_entrega = m.format('YYYY-MM-D');
    console.log(m.format('YYYY-MM-D'));
  }

  validateForm() {
    this.isValid = true;
    if (this.kardexService.formOrdencompra.idEmpleado == 0)
      this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    if (this.kardexService.formOrdencompra.id) {
      console.log('submit', this.kardexService.formOrdencompra.id);
      this.kardexService.UpdateOrderCompra(this.kardexService.formOrdencompra.id).subscribe(
        resp=>{
          // console.log(resp);
          this.toastr.success('Actualizado Exitosamente','Gnuino');
          this.router.navigate(["../kardex/listarordencompra"]);
        }
      )
    } else {
      this.kardexService.saveUpdateOrdercompra().subscribe((res) => {
       console.log('respuesta',res);
        this.resetForm();
        this.toastr.success('Guardado Exitosamente', 'Gnuino');
        this.router.navigate(['../kardex/listarordencompra']);
      });
    }
  }
}
