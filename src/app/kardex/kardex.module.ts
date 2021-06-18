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
 
//nuevos material angular
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core'; 
// import {MatTableModule} from '@angular/material/table';
 import {MatInputModule} from '@angular/material/input';
   import { MatTableModule} from '@angular/material/table';
   import {MatIconModule} from '@angular/material/icon';
   import {MatButtonModule} from '@angular/material/button';



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
//import { ListarsalidaproductoComponent } from './salidaproductos/listarsalidaproducto/listarsalidaproducto.component';
//import { AddsalidaproductoComponent } from './salidaproductos/addsalidaproducto/addsalidaproducto.component';
import { ListarentradaanuladaComponent } from './entradaalmacen/listarentradaanulada/listarentradaanulada.component';
import { ListarentradasinocanuladaComponent } from './entradasinoc/listarentradasinocanulada/listarentradasinocanulada.component';
import { FiltroPipe } from './pipes/filtro.pipe'; 
import { DetallesalidaproductoComponent } from './salidaproductos/detallesalidaproducto/detallesalidaproducto.component'; 
import { ListardevolucionComponent } from './devolucion/listardevolucion/listardevolucion.component';
import { AdddevolucionComponent } from './devolucion/adddevolucion/adddevolucion.component';
import { DetalledevolucionComponent } from './devolucion/detalledevolucion/detalledevolucion.component';
//import { ListartransferenciaComponent } from './transferencia/listartransferencia/listartransferencia.component';
//import { AddtransferenciaComponent } from './transferencia/addtransferencia/addtransferencia.component';
import { DetalletransferenciaComponent } from './transferencia/detalletransferencia/detalletransferencia.component';
//import { ListartransferenciasinocComponent } from './transferencia/listartransferenciasinoc/listartransferenciasinoc.component';
//import { AddtransferenciasinocComponent } from './transferencia/addtransferenciasinoc/addtransferenciasinoc.component';
//import { DetalletransferenciasinocComponent } from './transferencia/detalletransferenciasinoc/detalletransferenciasinoc.component';
import { ListardevolucionsinocComponent } from './devolucion/listardevolucionsinoc/listardevolucionsinoc.component';
import { AdddevolucionsinocComponent } from './devolucion/adddevolucionsinoc/adddevolucionsinoc.component';
import { DetalledevolucionsinocComponent } from './devolucion/detalledevolucionsinoc/detalledevolucionsinoc.component';
import { TotaltransferenciasComponent } from './transferencia/totaltransferencias/totaltransferencias.component';
//import { TotaltransferenciassinocComponent } from './transferencia/totaltransferenciassinoc/totaltransferenciassinoc.component';
import { TotaldevolucionComponent } from './devolucion/totaldevolucion/totaldevolucion.component';
import { TotaldevolucionsinocComponent } from './devolucion/totaldevolucionsinoc/totaldevolucionsinoc.component'; 
import { TotalsalidasComponent } from './salidaproductos/totalsalidas/totalsalidas.component';
//import { KardexocComponent } from './kardexoc/kardexoc.component';
//import { KardexsinocComponent } from './kardexsinoc/kardexsinoc.component';
//import { ListapruebaComponent } from './listaprueba/listaprueba.component';
import { ListarkardexComponent } from './kardex/listarkardex/listarkardex.component';
import { DetalleprecioventaComponent } from './kardex/detalleprecioventa/detalleprecioventa.component';
import { EditentradasinocComponent } from './entradasinoc/editentradasinoc/editentradasinoc.component';
import { EditdetalleentradasinocComponent } from './entradasinoc/editdetalleentradasinoc/editdetalleentradasinoc.component';
import { HistoricoocComponent } from './entradaalmacen/historicooc/historicooc.component';
import { HistoricosinocComponent } from './entradasinoc/historicosinoc/historicosinoc.component';
import { MovimientosproductosComponent } from './kardex/movimientosproductos/movimientosproductos.component';
import { ListapruebaComponent } from './listaprueba/listaprueba.component';
 
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
    // ListarsalidaproductoComponent,
     //AddsalidaproductoComponent,
     ListarentradaanuladaComponent,
     ListarentradasinocanuladaComponent,
     FiltroPipe, 
     DetallesalidaproductoComponent, 
     ListardevolucionComponent,
     AdddevolucionComponent,
     DetalledevolucionComponent,
    // ListartransferenciaComponent,
    // AddtransferenciaComponent,
     DetalletransferenciaComponent,
    // ListartransferenciasinocComponent,
    // AddtransferenciasinocComponent,
   //  DetalletransferenciasinocComponent,
     ListardevolucionsinocComponent,
     AdddevolucionsinocComponent,
     DetalledevolucionsinocComponent,
     TotaltransferenciasComponent,
    // TotaltransferenciassinocComponent,
     TotaldevolucionComponent,
     TotaldevolucionsinocComponent,
    // TotalsalidasinocComponent,
     TotalsalidasComponent,
    // KardexocComponent,
    // KardexsinocComponent,
 //    ListapruebaComponent,
     ListarkardexComponent,
     DetalleprecioventaComponent,
     EditentradasinocComponent,
     EditdetalleentradasinocComponent,
     HistoricoocComponent,
     HistoricosinocComponent,
     MovimientosproductosComponent,
     ListapruebaComponent
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
     MatAutocompleteModule, NgSelectModule,MatInputModule,MatTableModule,MatIconModule,MatButtonModule
    //  ,MatMenuModule

   
   

  ],
  entryComponents:[DetallecotizacionComponent],
  exports:[     
    KardexComponent
  ],
  providers:[KardexService, {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}]
  
})
export class KardexModule { }
