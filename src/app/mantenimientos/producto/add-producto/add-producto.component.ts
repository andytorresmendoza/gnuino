import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProducto, ProductoI } from '../../../models/producto';
import { DataCategoria } from 'src/app/models/categoria';
import { DataModelo } from 'src/app/models/modelo';
import { DataUnidadMedida } from 'src/app/models/unidadmedida';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataLinea } from 'src/app/models/linea';
import { DataTipoProducto } from '../../../models/tipoProducto';
 
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css'],
})
export class AddProductoComponent implements OnInit {
 

  // public productos: DataProducto[] = [];
  public categorias: DataCategoria[] = [];
  public modelos: DataModelo[] = []; 
  public unidadmedidas: DataUnidadMedida[] = [];
  public formData : DataProducto;
  public linea: DataLinea[] = [];
  public tproducto: DataTipoProducto[] = [];
  cargando = true;
  constructor(
    private mantenimientoService: MantenimientosService,
    private router: Router,private currentRoute: ActivatedRoute,private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientoService.getProductoId(+id).subscribe(res => {
         this.formData = res[0]; 
          // console.log(res);
          //  console.log( this.formData);


      });
    }else{
      this.resetForm();

}
 
 
    this.getCategoria();
    this.getModelo();
    this.getUnidadmedida();
    this.getLinea();
    this.getTipoProducto();
  }


 resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={        
      id:null,
      nombre_producto: '',
      idCategoria: null,
      idModelo:null,
      idUnidadMedida:null,
      codigo_producto: '',
      codigo_producto_num: '',
      estado:0, 
      idLinea:null,
      idTipoProducto:null,
      detalle_prod:'', 
      codigoProductoBarra:'',
  }; 
  } 
  getCategoria() {
    this.mantenimientoService.getCategoria().subscribe(
      (resp) => {
        this.categorias = resp;
        this.cargando = false;
        // console.log(resp);
      },
      (err) => {
        // console.log('Erro en la categoria');
      }
    );
  }

  getModelo() {
    this.mantenimientoService.getModelo().subscribe(
      (resp) => {
        this.modelos = resp;
        this.cargando = false;
        // console.log(resp);
      },
      (err) => {
        // console.log('Erro en la categoria');
      }
    );
  }

  getUnidadmedida() {
    this.mantenimientoService.getUnidadmedida().subscribe(
      (resp) => {
        this.unidadmedidas = resp;
        this.cargando = false;
        // console.log(resp);
      },
      (err) => {
        console.log('Erro en la categoria');
      }
    );
  }
  getLinea() {
    this.mantenimientoService.getLinea().subscribe(
      (resp) => {
        this.linea = resp;
       // this.cargando = false;
      //   console.log(resp);
      },
     
    );
  }
  getTipoProducto() {
    this.mantenimientoService.getTipoProducto().subscribe(
      (resp) => {
        this.tproducto = resp;
     //   this.cargando = false;
    //  console.log(resp);
      },
     
    );
  }
  onSubmit(form:NgForm):void{
    // console.log(form);
    if (this.formData.id) {
      this.mantenimientoService.updateProducto(this.formData).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../mantenimientos/listarproducto"]);
        }
      )
  } 
  else{

     this.mantenimientoService.addProducto(this.formData).subscribe(res =>{
    //console.log(res);
      this.resetForm();
      this.toastr.success('Guardado Exitosamente','Gnuino');
       this.router.navigate(["../mantenimientos/listarproducto"]);
    }) ;
  }
 }
 }
 