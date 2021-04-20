import { Injectable } from '@angular/core';
import { CotizacionI, DataCotizacion } from 'src/app/models/cotizacion';
import { DataDetalleCotizacion } from 'src/app/models/detalle-cotizacion';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { DataOrdenCompra, OrdenCompraI } from '../../models/ordencompra';

@Injectable({
  providedIn: 'root',
})
export class KardexService {
  headers = new HttpHeaders();

  formData: DataCotizacion;
  detalleCotizacion: DataDetalleCotizacion[];
  formOrdencompra: DataOrdenCompra;

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append(
      'Authorization',
      'Bearer' + localStorage.getItem('access_token')
    );
  }
  baseURL = environment.apiURL;
  manejarError(error: HttpErrorResponse) {
    console.log('error');
    return throwError('error personalizado');
  }
  getCotizacion() {
    return this.http
      .get(this.baseURL + 'cotizacion')
      .pipe(map((resp) => resp['data']));
  }
  getCotizacionById(id: number) {
    return this.http.get(`${this.baseURL}cotizacion/` + id).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }
  saveUpdateOrder() {
    var body = {
      ...this.formData,
      detalleCotizacion: this.detalleCotizacion,
    };
      console.log(body);
    return this.http.post(`${this.baseURL}cotizacion`, body);
  }

 
  UpdateOrder(formData: DataCotizacion) {
    const body = {
      ...this.formData,
      detalleCotizacion: this.detalleCotizacion 
    };
    delete body.id;
    //  console.log('body',  delete body.id);
      console.log('servicio',formData.id);
    //  this.http.put(`${this.baseURL}cotizacion/`+ id, body);
     return this.http.put(`${this.baseURL}cotizacion/${formData.id}`, body);

  }

  getCotizacionEstado() {
    return this.http
      .get(this.baseURL + 'cotizacion')
      .pipe(map((resp) => resp['data']));
  }

  getCotizacionEstadoPendiente() {
    return this.http
      .get(this.baseURL + 'cotizaciones-pendientes')
      .pipe(map((resp) => resp['data']));
  }

  getCotizacionDetalleById(id: number) {
    return this.http.get(`${this.baseURL}cotizacion-detalle/` + id).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }

    deleteDetalleCotizacion(id: number) {
      return this.http.delete(`${this.baseURL}cotizacion-detalle/${id}`);
    }

    deleteCotizacion(id: number) {
      return this.http.delete(`${this.baseURL}cotizacion/${id}`);
    }

    
    // EstadoCotizacionAnular(id: number) {
    //   return this.http.put(`${this.baseURL}cotizacion-estado/` + id, 3);
    // }
  /*ordencompra */

  saveUpdateOrdercompra() {
    var body = {
      ...this.formOrdencompra,
    };
    console.log(body);
    return this.http.post(`${this.baseURL}orden-compra`, body);
  }
  getOrdenCompra() {
    return this.http
      .get(this.baseURL + 'orden-compra')
      .pipe(map((resp) => resp['data']));
  }
  getOrdenCompraById(id: number) {
    return this.http.get(`${this.baseURL}orden-compra/` + id).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }
  UpdateOrderCompra(id: number) {
    const body = {
      ...this.formOrdencompra,
    };
    // delete body.id;
    //  console.log('body',body);
    console.log('servicio', id);
    return this.http.put(`${this.baseURL}orden-compra/` + id, body);
  }
}
