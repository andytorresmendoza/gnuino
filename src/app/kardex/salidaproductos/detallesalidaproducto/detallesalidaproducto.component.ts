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
import { ActivatedRoute } from '@angular/router';

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
    private mantenimientosService: MantenimientosService,private currentRoute: ActivatedRoute
  ) {}

  formData: DataDetalleSalidaAlmacen;
  productos: DataProducto[];
  tiposalidas: DataTipoSalida[];

  ngOnInit(): void {

    // let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getkardexById(this.data.id).subscribe(res => {
        //  console.log(res[0]); 
    this.formData= res[0];     
    // console.log(res[0],'nuevo');
    //  console.log(this.kardexService.formDataSalida );   
    
    });

    // this.getListIngresosCerrados();

    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
    //  console.log(this.productos,'producto');
    });

      this.mantenimientosService.getTiposalida().subscribe((resp) => {
     this.tiposalidas = resp as DataTipoSalida[];
     });


  /*  this.formData = Object.assign(
      {
        id: null,
        idProducto:0,
        // idIngresoAlmacen: 0,
        cantidadGlobal: 0,
        cantidadPrincipal: 0,
        cantidadSalida: 0,
        idTipoSalida: 0,
        idTipoIngreso: 0,
        detalleSalida: '',
        fechaSalida: '',
        nombre_producto: '' 
      },)
    */
//  console.log(this.kardexService.detalleSalida[this.data.id],'array');

this.formData = Object.assign({ 
  id: null,
  idProducto:0,
  // idIngresoAlmacen: 0,
  cantidadGlobal: 0,
  // cantidadPrincipal: 0,
  cantidadSalida: 0,
  idTipoSalida: 0,
  idTipoIngreso: 0,
  detalleSalida: '',
  fechaSalida: '',
  nombre_producto: '' ,
  descripcion_salida:''

 })
//  ,this.kardexService.detalleSalida[this.data]);
//  

}
// getListIngresosCerrados(){ 
//   this.kardexService.getListKardex()
//  .subscribe(resp => {
//   this.ListIngresosCerrados = resp; 
//     // this.ListIngresosCerrados = resp; 
//     this.cargando = false;
//     // this.cargando = false;
//       console.log(resp);
// });
// }


  onChange = ($event: any): void => {
    this.formData.descripcion_salida = $event.descripcion_salida;
  };

  onSubmit(form: NgForm) {
    
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaSalida).format('YYYY-MM-DD');
      form.value.fechaSalida = fechaParseada;
      // console.log(form.value);  
    this.kardexService.detalleSalida = form.value
 
    this.kardexService.GuardaSalidaProducto().subscribe(resp =>{  
      
     })    
    
     this.dialogRef.close();
     this.ngOnInit();
      // console.log('id', this.data.orderItemIndex);
      // console.log('submit', this.kardexService.detalleSalida);
    }
 
}
