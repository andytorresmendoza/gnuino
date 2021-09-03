import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DataDepartamento,
  DataDistrito,
  DataProvincia,
} from 'src/app/models/countries';
import { PaisI } from 'src/app/models/pais';
import { DataCliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';
import { DataTipodocumento } from 'src/app/models/tipodocumento';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css'],
})
export class AddClienteComponent implements OnInit {
  public distritos: DataDistrito[] = [];
  public paises: PaisI[];
  public departamentos: DataDepartamento[] = [];
  public provincias: DataProvincia[] = [];
  public categoriaCliente: any[]=[];
  public formData: DataCliente;
  tipodocumentos: DataTipodocumento[] = [];

  cargando = true;
  isValid: boolean = true;
  constructor(
    private mantenimientosServices: MantenimientosService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.mantenimientosServices.getClientebyId(+id).subscribe((res) => {
        this.formData = res[0];
        //console.log(res[0].id,'id');
        // console.log( this.formData);
      });
    } else {
      this.resetForm();
    }

    this.mantenimientosServices.getTipodocumento().subscribe((resp) => {
      this.tipodocumentos = resp;
      // this.cargando = false;
    });

    this.mantenimientosServices.getCategoriaCliente().subscribe((resp) => {
      this.categoriaCliente = resp;
      // console.log(resp);
      // this.cargando = false;
    });

    this.getDepartamento();
    this.getProvinciaAll();
    this.getDistritoAll();
    this.getPais();
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
      id: null,
      nombre_cliente: '',
      apellidos_pat_cliente: '',
      apellidos_mat_cliente: '',
      sexo_cliente: '',
      dni_cliente: '',
      direccion_cliente: '',
      telefono_cliente: '',
      email_cliente: '',
      idTipoDocumento: null,
      idPais: null,
      idDepartamento: null,
      idProvincia: null,
      idDistrito: null,
      idcategoriacliente:null
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
    if (form.value.idTipoDocumento == null)
      return Swal.fire({
        title: 'Seleccionar Tipo Documento',
        icon: 'error',
      });
    else if (form.value.idPais == null)
      return Swal.fire({
        title: 'Seleccionar Pais',
        icon: 'error',
      });
    
      else if  (form.value.idPais == 177 ){  
        if  (form.value.idDepartamento == null || form.value.idDepartamento == 0 || form.value.idProvincia == null || form.value.idProvincia == 0 || form.value.idDistrito == null || form.value.idDistrito == 0 )
 
        return   Swal.fire({
           title: 'Seleccionar Departamento - Provincia - Distrito' , 
           icon: 'error',
         });    
         }
         else if (form.value.idcategoriacliente == null)
         return Swal.fire({
           title: 'Seleccionar Categoria Cliente',
           icon: 'error',
         });
         return;
  }
  onSubmit(form: NgForm): void {
   if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();  
      });

      return; }
   else if (this.validateForm(form)) {
      return;
    }   
      
    else if (form.value.idPais == 177) {
      const bodyform = {
        id: form.value.id,
        nombre_cliente: form.value.nombre_cliente,
        apellidos_pat_cliente: form.value.apellidos_pat_cliente,
        apellidos_mat_cliente: form.value.apellidos_mat_cliente,
        sexo_cliente: form.value.sexo_cliente,
        dni_cliente: form.value.dni_cliente,
        direccion_cliente: form.value.direccion_cliente,
        telefono_cliente: form.value.telefono_cliente,
        email_cliente: form.value.email_cliente,
        idTipoDocumento: form.value.idTipoDocumento,
        idPais: form.value.idPais,
        idDepartamento: form.value.idDepartamento,
        idProvincia: form.value.idProvincia,
        idDistrito: form.value.idDistrito,
        idcategoriacliente:form.value.idcategoriacliente,
        estado: '1',
      };
 
      if (this.formData.id) {
        this.mantenimientosServices
          .updateCliente(bodyform)
          .subscribe((resp) => {
            resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success('Guardado Exitosamente', 'Gnuino' )
             this.router.navigate(['../mantenimientos/listarcliente']);
          });
      } else {
        this.mantenimientosServices.saveCliente(bodyform).subscribe((res) => { 
        res.code === 401 ?  this.toastr.warning(res.msg ):  this.toastr.success('Guardado Exitosamente', 'Gnuino')
          this.resetForm(); 
          this.router.navigate(['../mantenimientos/listarcliente']);
        });
      }
    } else {
      const bodyform = {
        id: form.value.id,
        nombre_cliente: form.value.nombre_cliente,
        apellidos_pat_cliente: form.value.apellidos_pat_cliente,
        apellidos_mat_cliente: form.value.apellidos_mat_cliente,
        sexo_cliente: form.value.sexo_cliente,
        dni_cliente: form.value.dni_cliente,
        direccion_cliente: form.value.direccion_cliente,
        telefono_cliente: form.value.telefono_cliente,
        email_cliente: form.value.email_cliente,
        idTipoDocumento: form.value.idTipoDocumento,
        idPais: form.value.idPais,
        idDepartamento: 0,
        idProvincia: 0,
        idDistrito: 0,
        idcategoriacliente:form.value.idcategoriacliente,
        estado: '1',
      };
 
      if (this.formData.id) {
        this.mantenimientosServices
          .updateCliente(bodyform)
          .subscribe((resp) => {
            resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success('Guardado Exitosamente', 'Gnuino' )
      
            this.router.navigate(['../mantenimientos/listarcliente']);
          });
      } else {
        this.mantenimientosServices.saveCliente(bodyform).subscribe((res) => {
          res.code === 401 ?  this.toastr.warning(res.msg ):  this.toastr.success('Guardado Exitosamente', 'Gnuino' )
          this.resetForm(); 
          this.router.navigate(['../mantenimientos/listarcliente']);
        });
      }
    }
  }
}
