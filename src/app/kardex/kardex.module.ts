import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { KardexComponent } from './kardex.component';
import { ListarcotizacionComponent } from './cotizacion/listarcotizacion/listarcotizacion.component';
import { AddcotizacionComponent } from './cotizacion/addcotizacion/addcotizacion.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesModule } from '../pages/pages.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KardexService } from '../services/kardex/kardex.service';
import {MatDialogModule} from '@angular/material/dialog';
import { DetallecotizacionComponent } from './cotizacion/detallecotizacion/detallecotizacion.component';
 
//nuevos
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core'; 
import {MatMenuModule} from '@angular/material/menu';

import { MatNativeDateModule } from '@angular/material/core';
import { OrdencompraComponent } from './ordencompra/ordencompra/ordencompra.component';
import { ListarordencompraComponent } from './ordencompra/listarordencompra/listarordencompra.component';
  // import { ToastrModule } from 'ngx-toastr';

 import {MatAutocompleteModule} from '@angular/material/autocomplete';
  import {AutocompleteLibModule} from 'angular-ng-autocomplete';
  import { NgSelectModule } from '@ng-select/ng-select';
import { EditarordencompraComponent } from './ordencompra/editarordencompra/editarordencompra.component';
import { AddentradaalmacenComponent } from './entradaalmacen/addentradaalmacen/addentradaalmacen.component';
import { ListarentradaalmacenComponent } from './entradaalmacen/listarentradaalmacen/listarentradaalmacen.component';
import { DetalleentradaalmacenComponent } from './entradaalmacen/detalleentradaalmacen/detalleentradaalmacen.component';
import { ListarcotianuladasComponent } from './cotizacion/listarcotianuladas/listarcotianuladas.component';
import { ListarordanuladasComponent } from './ordencompra/listarordanuladas/listarordanuladas.component';
import { EditingresoalmacenComponent } from './entradaalmacen/editingresoalmacen/editingresoalmacen.component';
import { EditdetalleentradaalmacenComponent } from './entradaalmacen/editdetalleentradaalmacen/editdetalleentradaalmacen.component';
import { ListarentradasinocComponent } from './entradasinoc/listarentradasinoc/listarentradasinoc.component';
import { AddentradasinocComponent } from './entradasinoc/addentradasinoc/addentradasinoc.component';
import { DetalleentradasinocComponent } from './entradasinoc/detalleentradasinoc/detalleentradasinoc.component';
import { ListarsalidaproductoComponent } from './salidaproductos/listarsalidaproducto/listarsalidaproducto.component';
import { AddsalidaproductoComponent } from './salidaproductos/addsalidaproducto/addsalidaproducto.component';
import { ListarentradaanuladaComponent } from './entradaalmacen/listarentradaanulada/listarentradaanulada.component';
import { ListarentradasinocanuladaComponent } from './entradasinoc/listarentradasinocanulada/listarentradasinocanulada.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ListarsalidasinocComponent } from './salidaproductos/listarsalidasinoc/listarsalidasinoc.component';
import { DetallesalidaproductoComponent } from './salidaproductos/detallesalidaproducto/detallesalidaproducto.component';
import { AddsalidasinocComponent } from './salidaproductos/addsalidasinoc/addsalidasinoc.component';
import { DetallesalidasinocComponent } from './salidaproductos/detallesalidasinoc/detallesalidasinoc.component';
import { ListardevolucionComponent } from './devolucion/listardevolucion/listardevolucion.component';
import { AdddevolucionComponent } from './devolucion/adddevolucion/adddevolucion.component';
import { DetalledevolucionComponent } from './devolucion/detalledevolucion/detalledevolucion.component';
import { ListartransferenciaComponent } from './transferencia/listartransferencia/listartransferencia.component';
import { AddtransferenciaComponent } from './transferencia/addtransferencia/addtransferencia.component';
import { DetalletransferenciaComponent } from './transferencia/detalletransferencia/detalletransferencia.component';
import { ListartransferenciasinocComponent } from './transferencia/listartransferenciasinoc/listartransferenciasinoc.component';
import { AddtransferenciasinocComponent } from './transferencia/addtransferenciasinoc/addtransferenciasinoc.component';
import { DetalletransferenciasinocComponent } from './transferencia/detalletransferenciasinoc/detalletransferenciasinoc.component';
import { ListardevolucionsinocComponent } from './devolucion/listardevolucionsinoc/listardevolucionsinoc.component';
import { AdddevolucionsinocComponent } from './devolucion/adddevolucionsinoc/adddevolucionsinoc.component';
import { DetalledevolucionsinocComponent } from './devolucion/detalledevolucionsinoc/detalledevolucionsinoc.component';
@NgModule({
  declarations: 
  [KardexComponent,    
     ListarcotizacionComponent,
     AddcotizacionComponent,
     DetallecotizacionComponent,
     OrdencompraComponent,
     ListarordencompraComponent,
     EditarordencompraComponent,
     AddentradaalmacenComponent,
     ListarentradaalmacenComponent,
     DetalleentradaalmacenComponent,
     ListarcotianuladasComponent,
     ListarordanuladasComponent,
     EditingresoalmacenComponent,
     EditdetalleentradaalmacenComponent,
     ListarentradasinocComponent,
     AddentradasinocComponent,
     DetalleentradasinocComponent,
     ListarsalidaproductoComponent,
     AddsalidaproductoComponent,
     ListarentradaanuladaComponent,
     ListarentradasinocanuladaComponent,
     FiltroPipe,
     ListarsalidasinocComponent,
     DetallesalidaproductoComponent,
     AddsalidasinocComponent,
     DetallesalidasinocComponent,
     ListardevolucionComponent,
     AdddevolucionComponent,
     DetalledevolucionComponent,
     ListartransferenciaComponent,
     AddtransferenciaComponent,
     DetalletransferenciaComponent,
     ListartransferenciasinocComponent,
     AddtransferenciasinocComponent,
     DetalletransferenciasinocComponent,
     ListardevolucionsinocComponent,
     AdddevolucionsinocComponent,
     DetalledevolucionsinocComponent,
     ],
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
     MatAutocompleteModule,  NgSelectModule,MatMenuModule

   
   

  ],
  entryComponents:[DetallecotizacionComponent],
  exports:[     
    KardexComponent
  ],
  providers:[KardexService, {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}]
  
})
export class KardexModule { }
