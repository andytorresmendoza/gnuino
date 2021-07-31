import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarcotizacionComponent } from './cotizacion/listarcotizacion/listarcotizacion.component';
import { AddcotizacionComponent } from './cotizacion/addcotizacion/addcotizacion.component';
import { DetallecotizacionComponent } from './cotizacion/detallecotizacion/detallecotizacion.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VentaComponent } from './venta.component';
import { VentaService } from '../services/venta/venta.service';
import { ListarordenventaComponent } from './ordenventa/listarordenventa/listarordenventa.component';
import { AddordenventaComponent } from './ordenventa/addordenventa/addordenventa.component';
import { EditarordenventaComponent } from './ordenventa/editarordenventa/editarordenventa.component';
import { AddempleadodeliveryComponent } from './empleadodelivery/addempleadodelivery/addempleadodelivery.component';
import { ListarempleadodeliveryComponent } from './empleadodelivery/listarempleadodelivery/listarempleadodelivery.component';
import { ListarordenventapendienteComponent } from './ordenventa/listarordenventapendiente/listarordenventapendiente.component';
import { EditarempleadodeliveryComponent } from './empleadodelivery/editarempleadodelivery/editarempleadodelivery.component';
import { ListarcotiventaanuladaComponent } from './cotizacion/listarcotiventaanulada/listarcotiventaanulada.component';
import { ListardeliveryComponent } from './delivery/listardelivery/listardelivery.component';
import { AdddeliveryComponent } from './delivery/adddelivery/adddelivery.component';
import { ListarordenventaanuladaComponent } from './ordenventa/listarordenventaanulada/listarordenventaanulada.component';



@NgModule({
  declarations: [VentaComponent, ListarcotizacionComponent, AddcotizacionComponent, DetallecotizacionComponent, ListarordenventaComponent, AddordenventaComponent, EditarordenventaComponent, AddempleadodeliveryComponent, ListarempleadodeliveryComponent, ListarordenventapendienteComponent, EditarempleadodeliveryComponent, ListarcotiventaanuladaComponent, ListardeliveryComponent, AdddeliveryComponent, ListarordenventaanuladaComponent],
  imports: [ 
    CommonModule,
    SharedModule,
     RouterModule,  
     HttpClientModule,
     FormsModule,
      ReactiveFormsModule,
     MatDialogModule,
     MatDatepickerModule,
     MatNativeDateModule,
     AutocompleteLibModule,
     MatAutocompleteModule,
      NgSelectModule,
      MatInputModule,
      MatTableModule,
      MatIconModule
      ,MatButtonModule
 
     
  ],
  entryComponents:[DetallecotizacionComponent],
  exports:[     
    VentaComponent
  ],
  providers:[VentaService, {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}]
})
export class VentaModule { }
