import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataDistrito } from 'src/app/models/countries';
import { DataEmpleado } from 'src/app/models/empleado';
import { DatEmpleadoDelivery } from 'src/app/models/empleadodelivery';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { VentaService } from 'src/app/services/venta/venta.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editarempleadodelivery',
  templateUrl: './editarempleadodelivery.component.html',
  styleUrls: ['./editarempleadodelivery.component.css']
})
export class EditarempleadodeliveryComponent implements OnInit {
  formData: DatEmpleadoDelivery;
  empleados: DataEmpleado[];
  distritos: DataDistrito[] ;
  numeracion:any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<EditarempleadodeliveryComponent>,
    public ventaService: VentaService,
    private mantenimientosService: MantenimientosService,private currentRoute: ActivatedRoute, private router: Router, private toastr: ToastrService

  ) {}

  ngOnInit(): void {

    // console.log(this.ventaService.detalleDelivery,'q sale');
  //  let id = this.currentRoute.snapshot.paramMap.get('id');

    this.ventaService.getEditarPreDeliveryId(this.data.id).subscribe(res => {
      // console.log(res,'poppup'); 
        this.formData = res[0]; 
        // this.numeracion =res[0].detalleOrdenVenta[0];
        // console.log(res[0].detalleOrdenVenta[0].codigo_orden_num_venta);
      }); 
  
  



    this.mantenimientosService.getEmpleado()
    .subscribe(resp => {
     
        this.empleados = resp as DataEmpleado[]  
  
   });
   this.mantenimientosService.getDistritoAll()
   .subscribe(resp => {  
   this.distritos = (resp).
   filter(valor => valor.idProvincia === 1401 );
  //  console.log( this.distritos);
   } );


  /*this.formData = Object.assign({ 
    id: this.data.id,
    idOrdenVenta: 0, 
    idEmpleado: null, 
    idBanco: 0,
    idDistrito: null, 
    idTipoPago:0
  
  },
  this.ventaService.detalleDelivery[this.data.orderItemIndex]);*/
    //  console.log( this.ventaService.detalleDelivery[this.data.id]);
    //  console.log(this.ventaService.detalleDelivery,'q sale');
}
onChangeMatch (idEmpleado:number, idDistrito:number)  {
  // console.log(idEmpleado,'EMPLEADO',idDistrito,'DISTRITO');
  this.ventaService.MatcPrecioVelivery(idEmpleado,idDistrito).subscribe((resp:any) => { 
    this.formData.preciodelivery = resp  
 
  });  
 
   }
   onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
      });

      return;
    }
   
   
    else if (
      
      form.value.preciodelivery === undefined
    ) {
      return Swal.fire({
        // title: form.value.cantidadGlobalKardex + ' Productos en Stock',
        text: 'No Existe Precio Delivery',
        icon: 'error',
      });
    }  
  
    else    {
    
    //  (this.formData.id) 
     
      this.ventaService.updateEmpleadoDelivery(this.formData).subscribe(
        resp=>{ 

        this.toastr.success('Actualizado Exitosamente','Gnuino');
        //  this.router.navigate(["../mantenimientos/listarcliente"]);
        });
        this.dialogRef.close();
  } }
   }

 
