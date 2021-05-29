import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DataCotizacionVenta } from '../../models/cotizacionventa';
import { DataDetalleCotizacionVenta } from '../../models/detalle-cotizacionVenta';
@Injectable({
  providedIn: 'root'
})
export class VentaService {
  headers = new HttpHeaders();

// // Cotizacion
 formData: DataCotizacionVenta; 
  detalleCotizacion: DataDetalleCotizacionVenta[];



  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append(
      'Authorization',
      'Bearer' + localStorage.getItem('access_token')
    );
  }
  baseURL = environment.apiURL;
}
