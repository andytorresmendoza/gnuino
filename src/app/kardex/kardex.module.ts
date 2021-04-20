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
import { MatNativeDateModule } from '@angular/material/core';
import { OrdencompraComponent } from './ordencompra/ordencompra/ordencompra.component';
import { ListarordencompraComponent } from './ordencompra/listarordencompra/listarordencompra.component';
  // import { ToastrModule } from 'ngx-toastr';

  import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: 
  [KardexComponent,    
     ListarcotizacionComponent,
     AddcotizacionComponent,
     DetallecotizacionComponent,
     OrdencompraComponent,
     ListarordencompraComponent,
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
     MatAutocompleteModule  
   

  ],
  entryComponents:[DetallecotizacionComponent],
  exports:[     
    KardexComponent
  ],
  providers:[KardexService]
  
})
export class KardexModule { }
