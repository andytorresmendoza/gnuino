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
import { DataOrdenVenta } from 'src/app/models/ordenVenta';
import { DatEmpleadoDelivery } from 'src/app/models/empleadodelivery';
@Injectable({
  providedIn: 'root'
})
export class VentaService {
  headers = new HttpHeaders();

// // Cotizacion
 formData: DataCotizacionVenta; 
  detalleCotizacion: DataDetalleCotizacionVenta[];

// ORDEN VENTA

  // Orden Compra
  formOrdenVenta: DataOrdenVenta; 
 //PRE DELIVERY
 
 detalleDelivery:DatEmpleadoDelivery[];

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
  
  getCotizacionVenta() {
    return this.http
      .get(this.baseURL + 'cotizacion-venta')
      .pipe(map((resp) => resp['data']));
  }
  getCotizacionVentaAnulada() {
    return this.http
      .get(this.baseURL + 'cotizaciones-venta-inactivas')
      .pipe(map((resp) => resp['data']));
  }

  getCotizacionById(id: number) {
    return this.http.get(`${this.baseURL}cotizacion-venta/` + id).pipe(
      map((resp) => resp['data'])
      //ACA VER COMO TRANSFORMAR EL FECHA_ENTREGA GUIARSE DE FORMULARIOS FERNANDO
      
    );
  }
  
  UpdateOrder(formData: DataCotizacionVenta) {
    const body = {
      ...this.formData,
      detalleCotizacion: this.detalleCotizacion 
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fechaCotizacion).format('YYYY-MM-DD');
    body.fechaCotizacion=fechaParseada;

    let fechaParseada2: any;
    fechaParseada2 = moment(body.fechaEntrega).format('YYYY-MM-DD');
    body.fechaEntrega=fechaParseada2;
    delete body.id;
    console.log('delete',  delete body.id);
    console.log('cuerpoventa',body);
    console.log('detalleventa',body.detalleCotizacion);
     return this.http.put(`${this.baseURL}cotizacion-venta/${formData.id}`, body);

  }

  saveUpdateOrder() {
    var body = {
      ...this.formData,
      detalleCotizacion: this.detalleCotizacion,
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fechaCotizacion).format('YYYY-MM-DD');
    body.fechaCotizacion=fechaParseada;

    let fechaParseada2: any;
    fechaParseada2 = moment(body.fechaEntrega).format('YYYY-MM-DD');
    body.fechaEntrega=fechaParseada2;

     console.log(body);
    return this.http.post(`${this.baseURL}cotizacion-venta`, body).pipe(
      map(
        (resp) => resp['data'])
        // console.log(resp['data']))
        
      // catchError(this.manejarError)
    );
  }

  deleteDetalleCotizacion(id: number) {
    return this.http.delete(`${this.baseURL}cotizacion-venta/${id}`);
  }

  EstadoCotizacionVentaAnular(id: number, bodyform:any) {
    // console.log(id,bodyform );
    var body = {
      ...bodyform,
      detalleCotizacion: this.detalleCotizacion
    };
    console.log(body,'body');
    return this.http.put(`${this.baseURL}cotizacion-venta-estado/` + id, body);
 }




 /*EstadoDelivery(id: number, bodyform:any) {  
  var body = {
    ...bodyform,
    detalleCotizacion: this.detalleDelivery
  };
  console.log(body,'BODY');
  return this.http.put(`${this.baseURL}estado-delivery-empleado/` + id, body);
}*/
  MatchKardex(idProducto: number,idAlmacen:number) {

    // let nuevoArregloTemp=[];
    return this.http.get(`${this.baseURL}precio/producto/`+idProducto +`/almacen/`+ idAlmacen).pipe(
    //  map((resp) => nuevoArregloTemp.push(resp)) 
    map((resp) => resp)
    );
    
    
  }

  MatcPrecioVelivery(idEmpleado: number,idDistrito:number) {

    // let nuevoArregloTemp=[];
    return this.http.get(`${this.baseURL}precio-delivery/empleado/`+idEmpleado +`/distrito/`+ idDistrito).pipe(
    //  map((resp) => nuevoArregloTemp.push(resp)) 
    map((resp) => resp)
    );
    
    
  }

// COTIZACIONES PENDIENTES

getCotizacionVentaEstadoPendiente() {
  return this.http
    .get(this.baseURL + 'cotizaciones-venta-pendientes')
    .pipe(map((resp) => resp['data']));
}

getCotizacionVentaDetalleById(id: number) {
  return this.http.get(`${this.baseURL}cotizacion-venta-detalle/` + id).pipe(
    map((resp) => resp['data']),
    catchError(this.manejarError)
  );
}
  //ORDEN 

  getOrdenVentaPendiente() {
    return this.http
      .get(this.baseURL + 'orden-venta-pendientes')
      .pipe(map((resp) => resp['data']));
  }
  getOrdenVenta() {
    return this.http
      .get(this.baseURL + 'orden-venta')
      .pipe(map((resp) => resp['data']));
  }
  SaveOrdenVenta() {
    var body = {
      ...this.formOrdenVenta,
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fechaEntrega).format('YYYY-MM-DD');
    body.fechaEntrega=fechaParseada;
    let fechaParseada2: any;
    fechaParseada2 = moment(body.fechaOrden).format('YYYY-MM-DD');
    body.fechaOrden=fechaParseada2;
     
    // console.log(body);
    return this.http.post(`${this.baseURL}orden-venta`, body);
  }

  getOrdenCompraVentaById(id: number) {
    return this.http.get(`${this.baseURL}orden-venta/` + id).pipe(
      map((resp) => resp['data']),
      catchError(this.manejarError)
    );
  }
  UpdateOrderVenta(id: number) {
    const body = {
      ...this.formOrdenVenta,
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fechaEntrega).format('YYYY-MM-DD');
    body.fechaEntrega=fechaParseada;
    let fechaParseada2: any;
    fechaParseada2 = moment(body.fechaOrden).format('YYYY-MM-DD');
    body.fechaOrden=fechaParseada2;
    // console.log('servicio', id);
    return this.http.put(`${this.baseURL}orden-venta/` + id, body).pipe(
      map((resp) => resp['data'])
       
    );
  }
// ASIGNACION DELIVERY

 //ORDEN 
 getListarPreDelivery() {
  return this.http
    .get(this.baseURL + 'empleado-delivery')
    .pipe(map((resp) => resp['data']));
}
GuardaEmpleadoDelivery(data:DatEmpleadoDelivery) {   
  // console.log(data , 'salida');  

  const body ={
    ...this.detalleDelivery
  }
  // console.log(body,'body');
  return this.http.post(`${this.baseURL}empleado-delivery`, body).pipe(
    map((resp) => 
  resp['data']) 
  ); 
} 
getEditarPreDeliveryId(id: number) {
  return this.http.get(`${this.baseURL}empleado-delivery/` + id).pipe(
    map((resp) => resp['data']),
    catchError(this.manejarError)
  );
}
updateEmpleadoDelivery(data:DatEmpleadoDelivery) {
    
  // console.log(data);
return this.http.put(`${this.baseURL}empleado-delivery/${data.id}`, data);

} 
EstadoAnularDelivery(id: number, bodyform:any) {
  // console.log(id,bodyform );
  return this.http.put(`${this.baseURL}estado-delivery-empleado/` + id, bodyform);
}

getListarDeliveryById(id: number) {
  return this.http.get(`${this.baseURL}pre-delivery/empleado/` + id).pipe(
    map((resp) => resp['data']),
    catchError(this.manejarError)
  );
}


getListarDetalleDeliveryById(id: number,id2: number) {

  // return this.http.get(`${this.baseURL}precio-delivery/empleado/`+idEmpleado +`/distrito/`+ idDistrito).pipe(
  return this.http.get(`${this.baseURL}pre-delivery/empleado/` + id+`/`+id2).pipe(
    map((resp) => resp['data']),
    catchError(this.manejarError)
  );
}

/*EstadoDelivery(id: number, bodyform:any) {
  // console.log(id,bodyform );
  return this.http.put(`${this.baseURL}estado-delivery-empleado/` + id, bodyform);
}
*/
EstadoDelivery(id: number, bodyform:any) {  
  var body = {
    ...bodyform,
    detalleCotizacion: this.detalleDelivery
  };
  console.log(body,'BODY');
  return this.http.put(`${this.baseURL}estado-delivery-empleado/` + id, body);
}

EstadoOrdenVentaAnular(id: number, bodyform:any) {
  var body = {
    ...bodyform,
    detalleCotizacion: this.detalleCotizacion
  };
  console.log(body,'body');
  return this.http.put(`${this.baseURL}orden-estado-venta/` + id, body);
}

getOrdenVentaAnulada() {
  return this.http
    .get(this.baseURL + 'orden-venta-inactivas')
    .pipe(map((resp) => resp['data']));
}
}

