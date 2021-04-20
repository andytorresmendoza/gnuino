import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataProducto, ProductoI } from '../../../models/producto';
import { DataCategoria } from 'src/app/models/categoria';
import { DataModelo } from 'src/app/models/modelo';
import { DataUnidadMedida } from 'src/app/models/unidadmedida';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css'],
})
export class AddProductoComponent implements OnInit {
  loginForm = new FormGroup({
    nombre_producto: new FormControl('', Validators.required),
    idCategoria: new FormControl('', Validators.required),
    idModelo: new FormControl('', Validators.required),
    idUnidadMedida: new FormControl('', Validators.required),
    
  });

  public productos: DataProducto[] = [];
  public categorias: DataCategoria[] = [];
  public modelos: DataModelo[] = [];
  public unidadmedidas: DataUnidadMedida[] = [];
  cargando = true;
  constructor(
    private mantenimientoService: MantenimientosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategoria();
    this.getModelo();
    this.getUnidadmedida();
  }

  getCategoria() {
    this.mantenimientoService.getCategoria().subscribe(
      (resp) => {
        this.categorias = resp;
        this.cargando = false;
        // console.log(resp);
      },
      (err) => {
        console.log('Erro en la categoria');
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
        console.log('Erro en la categoria');
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

  AddProducto(productos: ProductoI):void{
    console.log(productos);
    // this.nrocuentas[0].id = 22;
  this.mantenimientoService.addProducto(productos)
    .subscribe(res=>{
     console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarproducto"]);
     
      
    });
  
   
  
  }
}
