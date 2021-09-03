import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoProducto } from '../../../models/tipoProducto';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
import { DataPrecioVenta } from 'src/app/models/precioVenta';
import { NgForm } from '@angular/forms';
import { DataBancoVenta } from '../../../models/bancoventa';
import { DataCampaniaVenta } from '../../../models/campaniaVenta';

@Component({
  selector: 'app-addcampania',
  templateUrl: './addcampania.component.html',
  styleUrls: ['./addcampania.component.css']
})
export class AddcampaniaComponent implements OnInit {
  public formData: DataCampaniaVenta;
  constructor(
    private mantenimientosServices: MantenimientosService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.mantenimientosServices.getCampaniaVentabyId(+id).subscribe((res) => {
        this.formData = res[0];
        //  console.log(res);
        // console.log( this.formData);
      });
    } else {
      this.resetForm();
    }
  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
      id: null, 
      descripcion_campain: '',
    };
}

onSubmit(form: NgForm): void {
  if (form.invalid) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched(); //es para validar el guardar
      //  console.log(control); //son todos mis controles del formulario
    });

    return;
  }
 else if (this.formData.id) {
    this.mantenimientosServices
      .updateCampaniaVenta(this.formData)
      .subscribe((resp) => {
        this.toastr.success('Actualizado Exitosamente', 'Gnuino');
        this.router.navigate(['../mantenimientos/listarcampania']);
      });
  } else {
    this.mantenimientosServices
      .saveCampaniaVenta(this.formData)
      .subscribe((res) => {
        //console.log(res);
        this.resetForm();
        this.toastr.success('Guardado Exitosamente', 'Gnuino');
        this.router.navigate(['../mantenimientos/listarcampania']);
      });
  }
}



}