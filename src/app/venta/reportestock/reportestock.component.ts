import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MantenimientosService } from '../../services/mantenimientos/mantenimientos.service';
import { DataProducto } from '../../models/producto';
import { DataTipoAlmacen } from '../../models/tipoalmacen';
import { DataModelo } from 'src/app/models/modelo';
import { DataCategoria } from '../../models/categoria';

@Component({
  selector: 'app-reportestock',
  templateUrl: './reportestock.component.html',
  styleUrls: ['./reportestock.component.css']
})
export class ReportestockComponent implements OnInit {
  productos: DataProducto[];
  almacen: DataTipoAlmacen[];
  modelos: DataModelo[];
  categorias: DataCategoria[];
  public formData: any;
  constructor(  private mantenimientosService: MantenimientosService) { }

  ngOnInit(): void {

    this.resetForm();

    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      // this.formData = resp[0];
      // console.log(this.productos,'producto');
    });
    this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
      this.almacen = resp as DataTipoAlmacen[];
      console.log('principal', this.almacen);
    });

   
      this.mantenimientosService.getModelo().subscribe(
        (resp) => {
          this.modelos = resp as DataModelo[];
        });

        this.mantenimientosService.getCategoria().subscribe(
          (resp) => {
            this.categorias = resp as DataCategoria[];
          });
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
    
      idProducto: null,
      idAlmacen: null,
      idModelo: null,
      idCategoria: null,
      idStock:null
    };
}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
