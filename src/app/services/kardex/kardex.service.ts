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
import { DataOrdenCompra } from '../../models/ordencompra';
import { DataEntradaAlmacen } from '../../models/entradaalmacen';
import { DataDetalleIngresoAlmacen } from '../../models/detalle-ingresoalmacen';
import { DataEntradaSinOC } from '../../models/entradasinOc';
import { DataDetalleEntradasinOc } from '../../models/detalleEntradasinOc';
 
@Injectable({
  providedIn: 'root',
})
export class KardexService {
  headers = new HttpHeaders();
// Cotizacion
  formData: DataCotizacion; 
  detalleCotizacion: DataDetalleCotizacion[];

  // Orden Compra
  formOrdencompra: DataOrdenCompra; 


  // Ingreso Almacen con Oc
  formDataEntrada: DataEntradaAlmacen; 
  detalleIngresoAlmacen: DataDetalleIngresoAlmacen[];
  
  //Ingreso Almacen sin OC

  formDataIngresosinOc: DataEntradaSinOC;
  detalleIngresosinOc:DataDetalleEntradasinOc[];


  filteredData; 

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

  getCotizacionAnuladas() {
    return this.http
      .get(this.baseURL + 'cotizaciones-inactivas')
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
    return this.http.post(`${this.baseURL}cotizacion`, body).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
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

    
    EstadoCotizacionAnular(id: number, bodyform:any) {
    console.log(id,bodyform );
    return this.http.put(`${this.baseURL}cotizacion-estado/` + id, bodyform);
 }
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

  getOrdenCompraAnuladas() {
    return this.http
      .get(this.baseURL + 'orden-inactivas')
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
    return this.http.put(`${this.baseURL}orden-compra/` + id, body).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }
  deleteOrden(id: number) {
    return this.http.delete(`${this.baseURL}orden-compra/${id}`);
  }

  
  EstadoOrdenAnular(id: number, bodyform:any) {
  console.log(id,bodyform );
  return this.http.put(`${this.baseURL}orden-anulado/` + id, bodyform);
}

/*TIPOALMACEN */

getAlmacenPrincipal() {
  return this.http.get(this.baseURL+ 'sede-principal')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data'])
  
  );
 }
 getAlmacenSecundario() {
  return this.http.get(this.baseURL+ 'sede-secundaria')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data'])
  
  );
 }

  /*INGRESO ALMACEN */
  getOrdenEstadoPendiente() {
    return this.http
      .get(this.baseURL + 'orden-pendientes')
      .pipe(map((resp) => resp['data']));
  }

  GuardaIngresoAlmacen() {
    // console.log('llego');
    var body = {
      ...this.formDataEntrada 
      ,
      detalleSedeIngreso: this.detalleIngresoAlmacen,
    };
      // console.log(body);
    return this.http.post(`${this.baseURL}ingreso-almacen`, body).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }
  getIngresoAlmacen() {
    return this.http
      .get(this.baseURL + 'ingreso-almacen')
      .pipe(map((resp) => resp['data']));
  }
  getIngresoAlmacenById(id: number) {
    return this.http.get(`${this.baseURL}ingreso-almacen/` + id).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }
  GuardaEditIngresoAlmacen() {
    console.log('llego');
    var body = {
      ...this.formDataEntrada 
      ,
      detalleIngresoAlmacen: this.detalleIngresoAlmacen,
    };
      // console.log(body);
    return this.http.post(`${this.baseURL}almacen-pendiente-ingreso`, body).pipe(
      map((resp) =>
      console.log(resp)
      // resp['data'])
     
    ));
  }

  /*entrada sin OC */
  getIngresoSinOC() {
    return this.http
      .get(this.baseURL + 'ingreso-sinoc-almacen')
      .pipe(map((resp) => resp['data']));
  }
  getIngresoSinOCById(id: number) {
    return this.http.get(`${this.baseURL}ingreso-sinoc-almacen/` + id).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }
  saveIngresoSinOC() {
    var body = {
      ...this.formDataIngresosinOc,
      detalleIngresoSinOrden: this.detalleIngresosinOc, /*cambiar esto desde el json */
    };
      // console.log(body);
    return this.http.post(`${this.baseURL}ingreso-sinoc-almacen`, body).pipe(
      map((resp) => 
       resp['data'])
     
       ,
     catchError(this.manejarError)
    )
    
  }

  UpdateIngresoSinOC(formData: DataEntradaSinOC) {
    const body = {
      ...this.formDataIngresosinOc,
      detalleIngresoAlmacenSinOc: this.detalleIngresosinOc 
    };
    delete body.id;
    //  console.log('body',  delete body.id);
      // console.log('servicio',formData.id);
    //  this.http.put(`${this.baseURL}cotizacion/`+ id, body);
     return this.http.put(`${this.baseURL}ingreso-sinoc-almacen/${formData.id}`, body);

  }

}
