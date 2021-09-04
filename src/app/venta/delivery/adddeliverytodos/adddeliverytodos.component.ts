import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta/venta.service';
import jwt_decode from "jwt-decode";
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { DataEstadoDelivery } from 'src/app/models/estadodelivery';
import Swal from 'sweetalert2';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-adddeliverytodos',
  templateUrl: './adddeliverytodos.component.html',
  styleUrls: ['./adddeliverytodos.component.css']
})
export class AdddeliverytodosComponent implements OnInit {
  private decoded:any; 
  private iddelivery:any;
// public formDetalleEstadoDelivery:any[]=[];
  public formDataDelivery:any[]=[];
  public formDetalleDelivery:any[]=[];
  
  estadoDelivery: DataEstadoDelivery[] ;
  isButtonVisible:boolean=true; 
  constructor(  private currentRoute: ActivatedRoute,private ventaService: VentaService,private toastr: ToastrService, private router: Router,private mantenimientosServices: MantenimientosService) {
  }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    // let id2 =  this.iddelivery
      // console.log(id);
      this.ventaService.getListarDeliveryTodosById(+id).subscribe((res) => {
        // console.log(res);
        this.formDataDelivery = res[0]; 
        // console.log(this.formDataDelivery);
        this.formDetalleDelivery = res[0].detalleOrdenVenta[0].detalleCotizacion[0].detalleCotizacion; 
       this.ventaService.detalleDelivery =res[0].detalleOrdenVenta[0].detalleCotizacion[0].detalleCotizacion;
       if (res[0].idEstadoDelivery ==  2 || res[0].idEstadoDelivery ==  3 ) {
        this.isButtonVisible=false;
       } else {
        this.isButtonVisible=true;
       }
      });
      
      this.mantenimientosServices.getEstadoDelivery()
      .subscribe(resp => {
       
          this.estadoDelivery = (resp).filter(valor => valor.id === 2 || valor.id === 3);
    //  console.log(resp);
     });
  }


  onSubmit(form:NgForm) {
    const bodyform = {id:form.value.id, valorEstado: form.value.valorEstado, idOrdenVenta: form.value.idOrdenVenta}
 
       // const bodyform = {id:ordenes.id, estadoOrden: '3'}
       // console.log(ordenes.id);
       Swal.fire({
         title: 'Esta seguro?',
         text: `Que desea Guardar Datos`,
         icon: 'question',
         showConfirmButton: true,
         showCancelButton: true,
       }).then((resp) => {
         if (resp.value) {
           
           // this.Ordenes.splice(i, 1);
           this.ventaService.EstadoDelivery(form.value.id, bodyform).subscribe(
             resp => { 
               console.log(resp);
 
              this.toastr.success('Guardado Exitosamente');
               this.router.navigate(["../venta/listardeliverytodos"]);
           }
     
           );
         }
       });
 
 
 
 
   
      /*this.ventaService.EstadoDelivery(form.value.id, bodyform).subscribe(res =>{ 
 
       }); **/
     }
}
