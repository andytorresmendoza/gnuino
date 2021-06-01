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
import { map, tap, delay, catchError, repeat } from 'rxjs/operators';
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

  manejarError(error: HttpErrorResponse) {
    // console.log('error');
    return throwError('error personalizado');
  }

  getCotizacionById(id: number) {
    return this.http.get(`${this.baseURL}cotizacion/` + id).pipe(
      map((resp) => resp['data']),
      //ACA VER COMO TRANSFORMAR EL FECHA_ENTREGA GUIARSE DE FORMULARIOS FERNANDO
      catchError(this.manejarError)
    );
  }
  
  UpdateOrder(formData: DataCotizacionVenta) {
    const body = {
      ...this.formData,
      detalleCotizacion: this.detalleCotizacion 
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fecha_entrega).format('YYYY-MM-DD');
    body.fecha_entrega=fechaParseada;
    delete body.id;
    //  console.log('body',  delete body.id);
      // console.log('servicio',formData.id);
    //  this.http.put(`${this.baseURL}cotizacion/`+ id, body);
     return this.http.put(`${this.baseURL}cotizacion/${formData.id}`, body);

  }

  saveUpdateOrder() {
    var body = {
      ...this.formData,
      detalleCotizacion: this.detalleCotizacion,
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fecha_entrega).format('YYYY-MM-DD');
    body.fecha_entrega=fechaParseada;
     console.log(body);
    return this.http.post(`${this.baseURL}cotizacion`, body).pipe(
      map(
        (resp) => resp['data'])
        // console.log(resp['data']))
        
      // catchError(this.manejarError)
    );
  }

  deleteDetalleCotizacion(id: number) {
    return this.http.delete(`${this.baseURL}cotizacion-detalle/${id}`);
  }
}

