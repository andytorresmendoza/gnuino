import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoProducto } from '../../../models/tipoProducto';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
import { DataPrecioVenta } from 'src/app/models/precioVenta';
import { NgForm } from '@angular/forms';
import { DataBancoVenta } from '../../../models/bancoventa';

@Component({
  selector: 'app-addbancoventa',
  templateUrl: './addbancoventa.component.html',
  styleUrls: ['./addbancoventa.component.css']
})
export class AddbancoventaComponent implements OnInit {
  public formData: DataBancoVenta;
 
  constructor(
    private mantenimientosServices: MantenimientosService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.mantenimientosServices.getBancoVentabyId(+id).subscribe((res) => {
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
      descripcion_banco: '',
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
        .updateBancoVenta(this.formData)
        .subscribe((resp) => {
          this.toastr.success('Actualizado Exitosamente', 'Gnuino');
          this.router.navigate(['../mantenimientos/listarbancoventa']);
        });
    } else {
      this.mantenimientosServices
        .saveBancoVenta(this.formData)
        .subscribe((res) => {
          //console.log(res);
          this.resetForm();
          this.toastr.success('Guardado Exitosamente', 'Gnuino');
          this.router.navigate(['../mantenimientos/listarbancoventa']);
        });
    }
  }
}
