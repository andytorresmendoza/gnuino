import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../../services/venta/venta.service';
import { MatDialog } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcotizacion',
  templateUrl: './addcotizacion.component.html',
  styleUrls: ['./addcotizacion.component.css']
})
export class AddcotizacionComponent implements OnInit {

  constructor(public ventaService: VentaService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

}
