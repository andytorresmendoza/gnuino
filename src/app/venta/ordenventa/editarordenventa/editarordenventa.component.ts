import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataBanco } from 'src/app/models/banco';
import { DataDistrito } from 'src/app/models/countries';
import { DataDetalleCotizacionVenta } from 'src/app/models/detalle-cotizacionVenta';
import { DataLinea } from 'src/app/models/linea';
import { DataTipoMoneda } from 'src/app/models/tipo-moneda';
import { DataTipoPago } from 'src/app/models/tipopago';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { VentaService } from 'src/app/services/venta/venta.service';

@Component({
  selector: 'app-editarordenventa',
  templateUrl: './editarordenventa.component.html',
  styleUrls: ['./editarordenventa.component.css']
})
export class EditarordenventaComponent implements OnInit {
  detalleCotizacionesVenta: DataDetalleCotizacionVenta[];
  cotizacion:any[];
  linea: DataLinea[];
  tipoMoneda:DataTipoMoneda[];
  distritos: DataDistrito[] ;
  tipopagos: any[] = [];
  bancos: DataBanco[];
  isValid: boolean = true;
  isButtonVisible:boolean=true;
  constructor(public ventaService: VentaService,
    private mantenimientosService: MantenimientosService,
    private toastr: ToastrService,
    private currentRoute: ActivatedRoute,  
    private router: Router ) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id'); 

    this.ventaService.getOrdenCompraVentaById(+id).subscribe((res) => {
  // console.log('editar',res );
        this.ventaService.formOrdenVenta = res[0];
        this.cotizacion = res[0].detalleCotizacion[0];
    this.detalleCotizacionesVenta  = res[0].detalleCotizacion[0].detalleCotizacion;
    
        if (res[0].idEstadoFlujo ==  2 || res[0].idEstadoFlujo ==  3 || res[0].idEstadoFlujo ==  4) {
          this.isButtonVisible=false;
         } else { 
          this.isButtonVisible=true;
         } 
        // console.log(this.kardexService.formOrdencompra );
         
      })
 
      this.mantenimientosService.getLinea()
      .subscribe(resp => {
        this.linea = resp as DataLinea[]  
     });
     this.mantenimientosService.getTipoMoneda()
     .subscribe(resp => {
       this.tipoMoneda = resp as DataTipoMoneda[]  
      //  console.log(resp);
    });
    this.mantenimientosService.getDistritoAll()
    .subscribe(resp => {  
    this.distritos = (resp).
    filter(valor => valor.idProvincia === 1401 );
    //  console.log( this.distritos);
    } );
  
        
    this.mantenimientosService.getTipopago().subscribe((resp) => {
      this.tipopagos = resp as DataTipoPago[]; 
    });
    this.mantenimientosService.getBanco().subscribe((resp) => {
      this.bancos = resp as DataBanco[];
      //  console.log(this.bancos);
    });
  }
  onSubmit(form: NgForm) {
// console.log(form.value);
    if ( form.invalid ) {

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
  if (this.ventaService.formOrdenVenta.id) {
    this.isButtonVisible = false;
  //  console.log('submit', this.kardexService.formOrdencompra.id);
    this.ventaService.UpdateOrderVenta(this.ventaService.formOrdenVenta.id).subscribe(
      resp=>{
        // console.log(resp);
        this.toastr.success(resp.msg );
        this.router.navigate(["../venta/listarordenventa"]);
      }
    )
  }   
  }
}
