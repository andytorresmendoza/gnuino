import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';

@Component({
  selector: 'app-movimientosproductos',
  templateUrl: './movimientosproductos.component.html',
  styleUrls: ['./movimientosproductos.component.css']
})

export class MovimientosproductosComponent implements OnInit {
// movimientosProductos: any[];
movimientosProductos: any[] = [];
cabeceraProducto:any; 
lista:any; 
isButtonVisible:boolean=true;
  constructor(public kardexService: KardexService,  private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getMovimientoProductos(+id).subscribe(res => {
      this.cabeceraProducto = res[0].detalleKardex; 
      this.movimientosProductos = res[0].detalleMovs;  
    // console.log(res[0].detalleMovs); 
    }); 
    }
 
      
    }
   
   
 
   
 