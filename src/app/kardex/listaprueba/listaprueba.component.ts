import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../services/kardex/kardex.service';
import { MantenimientosService } from '../../services/mantenimientos/mantenimientos.service';
import { DataMovimientoKardex } from '../../models/movimientoskardex';
 
interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-listaprueba',
  templateUrl: './listaprueba.component.html',
  styleUrls: ['./listaprueba.component.css']
})
export class ListapruebaComponent implements OnInit {
  displayedColumns: string[] = ['precio'];
  cabeceraProducto:any;
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];
  movimientosProductos: DataMovimientoKardex[] = [];
  
  /*getTotalCost() {
    return this.movimientosProductos.map(r => parseFloat(r.precio))
    .reduce((acc, value,index,array ) => 
     (acc + value ), 0)
  
   
  }*/
  getTotalCost() {
    var suma =  this.movimientosProductos.map(r => parseFloat(r.precio))
    .reduce((acc, value  ) => 
     (acc + value ), 0) 
 
  return   suma / this.movimientosProductos.length;
  }

  constructor(public kardexService: KardexService,  private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute)
  {}

  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.kardexService.getMovimientoProductos(+id).subscribe(res => {
    this.cabeceraProducto = res[0].detalleKardex; 
      this.movimientosProductos = res[0].detalleMovs;  
     //console.log(res[0] ); 
    }); 
  }

}
