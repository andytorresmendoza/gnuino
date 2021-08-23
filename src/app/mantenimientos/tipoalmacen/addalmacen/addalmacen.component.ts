import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {
  DataDepartamento,
  DataProvincia,
  DataDistrito,
} from '../../../models/countries';
import { PaisI } from '../../../models/pais';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoAlmacenI, DataTipoAlmacen } from '../../../models/tipoalmacen';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addalmacen',
  templateUrl: './addalmacen.component.html',
  styleUrls: ['./addalmacen.component.css'],
})
export class AddalmacenComponent implements OnInit {
  // loginForm = new FormGroup({
  //   nombre_alamcen: new FormControl('', Validators.required),
  //   cod_alamcen: new FormControl('', Validators.required),
  //   direccion_almacen: new FormControl('', Validators.required),
  //   idDepartamento: new FormControl('', Validators.required),
  //   idProvincia: new FormControl('', Validators.required),
  //   idDistrito: new FormControl('', Validators.required),
  //   idPais: new FormControl('', Validators.required),
  //   tipoAlmacen: new FormControl('', Validators.required),
  // });
  public distritos: DataDistrito[] = [];
  public paises: PaisI[];
  public departamentos: DataDepartamento[] = [];
  public provincias: DataProvincia[] = [];
  public formData: DataTipoAlmacen;
  cargando = true;

  constructor(
    private mantenimientosServices: MantenimientosService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.mantenimientosServices.getTipoAlmacenId(+id).subscribe((res) => {
        this.formData = res[0];
        //    console.log(res[0],'id');
        // console.log( this.formData);
      });
    } else {
      this.resetForm();
    }
    this.getDepartamento();
    this.getProvinciaAll();
    this.getDistritoAll();
    this.getPais();
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
      id: null,
      nombre_alamcen: '',
      cod_alamcen: '',
      direccion_almacen: '',
      idPais: null,
      idDepartamento: null,
      idProvincia: null,
      idDistrito: null,
      tipoAlmacen: 0,
    };
  }
  getPais() {
    this.mantenimientosServices
      .getPais()
      .subscribe((data) => (this.paises = data));
  }

  getDepartamento() {
    this.mantenimientosServices.getDepartamento().subscribe((response) => {
      this.departamentos = response;
      this.cargando = false;
    });
  }

  getProvinciaAll() {
    this.mantenimientosServices.getProvinciaAll().subscribe((response) => {
      this.provincias = response;
      this.cargando = false;
    });
  }

  getDistritoAll() {
    this.mantenimientosServices.getDistritoAll().subscribe((response) => {
      this.distritos = response;
      this.cargando = false;
    });
  }

  onSelectDepartamento($event: any): void {
    this.mantenimientosServices.getProvincia($event).subscribe((response) => {
      //  console.log(response,'response');
      this.provincias = response;
    });
  }
  onSelectProvincia($event: any): void {
    this.mantenimientosServices.getDistrito($event).subscribe((response) => {
      this.distritos = response;
      //  console.log(response);
    });
  }

  validateForm(form: NgForm) {
    if (form.value.idPais == null)
      return Swal.fire({
        title: 'Seleccionar Pais',
        icon: 'error',
      });
    else if (form.value.idPais == 177) {
      if (
        form.value.idDepartamento == null ||
        form.value.idDepartamento == 0 ||
        form.value.idProvincia == null ||
        form.value.idProvincia == 0 ||
        form.value.idDistrito == null ||
        form.value.idDistrito == 0
      )
        return Swal.fire({
          title: 'Seleccionar Departamento - Provincia - Distrito',
          icon: 'error',
        });
    }
    return;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.validateForm(form)) {
      return;
    } else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });

      return;
    } else if (form.value.idPais == 177) {
      const bodyform = {
        id: form.value.id,
        nombre_alamcen: form.value.nombre_alamcen,
        cod_alamcen: form.value.cod_alamcen,
        direccion_almacen: form.value.direccion_almacen,
        idPais: form.value.idPais,
        idProvincia: form.value.idProvincia,
        idDistrito: form.value.idDistrito,
        idDepartamento: form.value.idDepartamento,
        tipoAlmacen: 0,
        estado: '1',
      };
      if (this.formData.id) {
        this.mantenimientosServices
          .updateTipoAlmacen(bodyform)
          .subscribe((resp) => {
            this.toastr.success('Actualizado Exitosamente', 'Gnuino');
            this.router.navigate(['../mantenimientos/listaralmacen']);
          });
      } else {
        this.mantenimientosServices
          .addTipoAlmacen(bodyform)
          .subscribe((res) => {
            //console.log(res);
            this.resetForm();
            this.toastr.success('Guardado Exitosamente', 'Gnuino');
            this.router.navigate(['../mantenimientos/listaralmacen']);
          });
      }
      // console.log(bodyform);
    } else {
      const bodyform = {
        id: form.value.id,
        nombre_alamcen: form.value.nombre_alamcen,
        cod_alamcen: form.value.cod_alamcen,
        direccion_almacen: form.value.direccion_almacen,
        idPais: form.value.idPais,
        idProvincia: 0,
        idDistrito: 0,
        idDepartamento: 0,
        tipoAlmacen: 0,
        estado: '1',
      };

      if (this.formData.id) {
        this.mantenimientosServices
          .updateTipoAlmacen(bodyform)
          .subscribe((resp) => {
            this.toastr.success('Actualizado Exitosamente', 'Gnuino');
            this.router.navigate(['../mantenimientos/listaralmacen']);
          });
      } else {
        this.mantenimientosServices
          .addTipoAlmacen(bodyform)
          .subscribe((res) => {
            //console.log(res);
            this.resetForm();
            this.toastr.success('Guardado Exitosamente', 'Gnuino');
            this.router.navigate(['../mantenimientos/listaralmacen']);
          });
      }
    }
  }
}
