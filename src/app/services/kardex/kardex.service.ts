import { Injectable } from '@angular/core';
import { CotizacionI, DataCotizacion } from 'src/app/models/cotizacion';
import { DataDetalleCotizacion } from 'src/app/models/detalle-cotizacion';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap, delay, catchError, repeat } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { DataOrdenCompra } from '../../models/ordencompra';
import { DataEntradaAlmacen } from '../../models/entradaalmacen';
import { DataDetalleIngresoAlmacen } from '../../models/detalle-ingresoalmacen';
import { DataEntradaSinOC } from '../../models/entradasinOc';
import { DataDetalleEntradasinOc } from '../../models/detalleEntradasinOc';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { DataSalidaProductos } from '../../models/salidaproductoscerrados';
import { DataDetalleSalidaAlmacen } from '../../models/detallesalidaalmacen';
import { DataSalidaSinOcCerrado } from '../../models/salidaproductossinoc';
import { DataDetalleDevolucion } from '../../models/detalledevolucion';
import { DataDevolucion } from '../../models/devoluciones';
import { DataTransferenciaProductos } from '../../models/transferenciaproductos';
import { DataDetalleTransferencias } from '../../models/detalletransferencias';
import { DataTransferenciaSinOcCerrado } from '../../models/transferenciaproductossinoc';
import { DataDetalleTransferenciasinOc } from '../../models/detalletransferenciasinoc';
import { DataDetalleSalidasinOc } from '../../models/detallesinocalmacen';
import { DataDevolucionSinOc } from 'src/app/models/devolucionsinoc';
import { DataDetalleDevolucionSinOc } from '../../models/detalledevolucionsinoc'; 
import { DataDetalleDevolucionP } from '../../models/detalletransferenciaprueba';

 
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

  //Salida Almacen con  OC

  formDataSalida: DataSalidaProductos;
  detalleSalida:DataDetalleSalidaAlmacen[];

  //Salida Almacen sin  OC

   formDataSalidasioc: DataSalidaSinOcCerrado;
   detalleSalidasinOC:DataDetalleSalidasinOc[];

//DEVOLUCIONES
formDataDevoluciones: DataDevolucion;
detalleDevoluciones: DataDetalleDevolucion[];
detalleDevolucionesP: DataDetalleDevolucionP[];
//devoluciones sin o/C

formDataDevolucionesSinOc: DataDevolucionSinOc;
detalleDevolucionesSinOC: DataDetalleDevolucionSinOc[];






//transferencias
formDataTransferencia: DataTransferenciaProductos;
detalleTransferencia: DataDetalleTransferencias[];
//transferencias si oc

formDatatransferenciasinoc: DataTransferenciaSinOcCerrado;
detalleTransferenciasinoc: DataDetalleTransferenciasinOc[];



  filteredData; 

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
      //ACA VER COMO TRANSFORMAR EL FECHA_ENTREGA GUIARSE DE FORMULARIOS FERNANDO
      catchError(this.manejarError)
    );
  }
  saveUpdateOrder() {
    var body = {
      ...this.formData,
      detalleCotizacion: this.detalleCotizacion,
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fecha_entrega).format('YYYY-MM-DD');
    body.fecha_entrega=fechaParseada;
      // console.log(body);
    return this.http.post(`${this.baseURL}cotizacion`, body).pipe(
      map(
        (resp) => resp['data'])
        // console.log(resp['data']))
        
      // catchError(this.manejarError)
    );
  }

 
  UpdateOrder(formData: DataCotizacion) {
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
    // console.log(id,bodyform );
    return this.http.put(`${this.baseURL}cotizacion-estado/` + id, bodyform);
 }
  /*ordencompra */

  // saveUpdateOrdercompra() {
  //   var body = {
  //     ...this.formOrdencompra,
  //   };
  //   console.log(body);
  //   return this.http.post(`${this.baseURL}orden-compra`, body);
  // }

  saveUpdateOrdercompra() {
    var body = {
      ...this.formOrdencompra,
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fechaEntrega).format('YYYY-MM-DD');
    body.fechaEntrega=fechaParseada;
    let fechaParseada2: any;
    fechaParseada2 = moment(body.fechaEnvio).format('YYYY-MM-DD');
    body.fechaEnvio=fechaParseada2;

    // console.log(body);
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
    let fechaParseada: any;
    fechaParseada = moment(body.fechaEntrega).format('YYYY-MM-DD');
    body.fechaEntrega=fechaParseada;
    let fechaParseada2: any;
    fechaParseada2 = moment(body.fechaEnvio).format('YYYY-MM-DD');
    body.fechaEnvio=fechaParseada2;
    // console.log('servicio', id);
    return this.http.put(`${this.baseURL}orden-compra/` + id, body).pipe(
      map((resp) => resp['data'])
       
    );
  }
  deleteOrden(id: number) {
    return this.http.delete(`${this.baseURL}orden-compra/${id}`);
  }

  
  EstadoOrdenAnular(id: number, bodyform:any) {
  // console.log(id,bodyform );
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
console.log(body);
    let fechaParseada: any;
    fechaParseada = moment(body.fechaIngreso).format('YYYY-MM-DD');
    body.fechaIngreso=fechaParseada;
    // console.log(body.detalleSedeIngreso);
    if (body.detalleSedeIngreso.length >= 1){
      return this.http.post(`${this.baseURL}ingreso-almacen`, body).pipe(
        map((resp) =>
        //  console.log(resp ))
        
        resp['data'])
        //  console.log(resp['data']))
        // catchError(this.manejarError)

      );
    }
    else{
      this.toastr.warning('Agregar Detalle de los Productos en Ingreso Almacen')
    }
   
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
    // console.log('llego');
    var body = {
      ...this.formDataEntrada 
      ,
      detalleIngresoAlmacen: this.detalleIngresoAlmacen,
    };
    console.log(body);
    let fechaParseada: any;
    fechaParseada = moment(body.fechaIngreso).format('YYYY-MM-DD');
    body.fechaIngreso=fechaParseada;
      // console.log(body);
    return this.http.post(`${this.baseURL}almacen-pendiente-ingreso`, body).pipe(
      map((resp) =>
      // console.log(resp)
       resp['data'])
     
    );
  }

  EstadoEntradaAnular(id: number, bodyform:any) {
    // console.log(id,bodyform );
    return this.http.put(`${this.baseURL}ingreso-estado/` + id, bodyform);
  }

  getEntradasAnuladas() {
    return this.http
      .get(this.baseURL + 'ingreso-oc-anuladas')
      .pipe(map((resp) => resp['data']));
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
    let fechaParseada: any;
    fechaParseada = moment(body.fechaIngreso).format('YYYY-MM-DD');
    body.fechaIngreso=fechaParseada;
      // console.log(body);
    return this.http.post(`${this.baseURL}ingreso-sinoc-almacen`, body).pipe(
      map((resp) => 
      (resp['data']))
     
    //    ,
    //  catchError(this.manejarError)
    )
    
  }

  UpdateIngresoSinOC(formData: DataEntradaSinOC) {
    const body = {
      ...this.formDataIngresosinOc,
      detalleIngresoAlmacenSinOc: this.detalleIngresosinOc 
    };
    let fechaParseada: any;
    fechaParseada = moment(body.fechaIngreso).format('YYYY-MM-DD');
    body.fechaIngreso=fechaParseada;
    delete body.id;
    //  console.log('body',  delete body.id);
      // console.log('servicio',formData.id);
    //  this.http.put(`${this.baseURL}cotizacion/`+ id, body);
     return this.http.put(`${this.baseURL}ingreso-sinoc-almacen/${formData.id}`, body).pipe(
      map((resp) => 
       resp['data'])
     
      
    )
    

  }
  getEntradassinOcAnulada() {
    return this.http
      .get(this.baseURL + 'ingreso-sinoc-anuladas')
      .pipe(map((resp) => resp['data']));
  }

  EstadoEntradasinocAnular(id: number, bodyform:any) {
    // console.log(id,bodyform );
    return this.http.put(`${this.baseURL}ingresosinoc-estado/` + id, bodyform);
  }
/* getEmpleado() { //TRANSFORMAR DATA
    return this.http.get(this.baseURL+ 'empleado')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
    .pipe(
      map((resp:any[])=> 
      // map((resp:any[])=>
      resp['data'].map(empleado=>({
        idEmpleado:empleado.id, nombre_empleado:empleado.nombre_empleado })
      )
      )
    );
   } */

   /*SALIDA DE PRODUCTOS */
   
   getLisSalidasAlmacen() {
    return this.http
      .get(this.baseURL + 'salida-productos-oc')
      .pipe(map((resp) => 
      
      resp['data']));
  }
   getListIngresosCerrados() {
    return this.http
      .get(this.baseURL + 'list-ingreso-oc-cerrada')
      .pipe(map((resp) => resp['data']));
  }

  getSalidaProductosById(id: number) {
    return this.http.get(`${this.baseURL}detail-ingreso-oc-cerrada/` + id).pipe(
      map((resp) => 
      // console.log( resp['data']))
      resp['data'])
    );
  }

  GuardaSalidaAlmacen() {
    // console.log('llego');
    // console.log('this.detalleDevoluciones',this.detalleSalida);
    let nuevoArregloTemp=[];
      this.detalleSalida?.map(
        res => {
          res.hasOwnProperty('idDetalleIngresoAlmacen') ? nuevoArregloTemp.push(res): '' 
        }); 
    var body = { 
      // ...this.detalleSalida
      detallSalida: nuevoArregloTemp
    }; 

      return this.http.post(`${this.baseURL}salida-productos-oc`, body).pipe(
        map((resp) =>
      //  console.log(resp ))
        
      resp['data'])
        //  console.log(resp['data']))
        // catchError(this.manejarError)

      );
   
  
   
  }

  /*SALIDA DE PRODUCTOS SIN OC */
  getLisSalidassinocAlmacen() {
    return this.http
      .get(this.baseURL + 'salida-productos-sinoc')
      .pipe(map((resp) => 
      
      resp['data']));
  }
  getListIngresossinocCerrados() {
    return this.http
      .get(this.baseURL + 'list-ingreso-sinoc-cerrada')
      .pipe(map((resp) => resp['data']));
  }

 
  getSalidasinOCsById(id: number) {
    return this.http.get(`${this.baseURL}detail-ingreso-sinoc-cerrada/` + id).pipe(
      map((resp) => 
      // console.log( resp['data']))
      resp['data'])
    );
  }

  GuardaSalidasinOC() {
    let nuevoArregloTemp=[];
    this.detalleSalidasinOC?.map(
      res => {
        res.hasOwnProperty('idDetalleIngresoAlmacen') ? nuevoArregloTemp.push(res): '' 
      }); 
    var body = { 
      // ...this.detalleSalida
      detallSalidaSinoc: nuevoArregloTemp
    }; 
 

      return this.http.post(`${this.baseURL}salida-productos-sinoc`, body).pipe(
        map((resp) =>
      //  console.log(resp ))
        
       resp['data'])
          //  console.log(resp['data']))
        // catchError(this.manejarError)

      );
   
  
   
  }


  /*DEVOLUCIONES CON O/C */

  getLisDevolucionesAlmacen() {
    return this.http
      .get(this.baseURL + 'devolucion-orden-compra')
      .pipe(map((resp) => 
      
      resp['data']));
  }
  GuardaDevolucionAlmacen() {
    // console.log('this.detalleDevoluciones',this.detalleDevoluciones);
    let nuevoArregloTemp=[];
      this.detalleDevoluciones?.map(
        res => {
          res.hasOwnProperty('idDetalleIngresoAlmacen') ? nuevoArregloTemp.push(res): '' 
        }); 
    var body = {  
      detalledevolucion: nuevoArregloTemp
    };  
    // console.log('nuevo array',nuevoArregloTemp);
    // delete body.detalledevolucion[0].idDetalleIngresoAlmacen;
    // let idParse: any;
    // idParse =0;
    // body.detalledevolucion[0].id = idParse;
 
      return this.http.post(`${this.baseURL}devolucion-orden-compra`, body).pipe(
        map((resp) => 
      resp['data'])
 

      );
  }
  
  /*DEVOLUCIONES SIN  O/C */

  getLisDevolucionesSinOc() {
    return this.http
      .get(this.baseURL + 'devolucion-sinorden-compra')
      .pipe(map((resp) => 
      
      resp['data']));
  }
  GuardaDevolucionSinOc() {
    // console.log('this.detalleDevoluciones',this.detalleDevolucionesSinOC);
    let nuevoArregloTemp=[];
      this.detalleDevolucionesSinOC?.map(
        res => {
          res.hasOwnProperty('idDetalleIngresoAlmacen') ? nuevoArregloTemp.push(res): '' 
        }); 
    var body = { 
      // ...this.detalleSalida
      detalledevolucion: nuevoArregloTemp
    }; 
    // console.log('nuevo array',nuevoArregloTemp);
      return this.http.post(`${this.baseURL}devolucion-sinorden-compra`, body).pipe(
        map((resp) =>
      //  console.log(resp ))
        
      resp['data'])
        //  console.log(resp['data']))
        // catchError(this.manejarError)

      );
   
  
   
  }

    /*TRANSFERENCIA CON O/C */    

    getListransferenciaAlmacen() {
      return this.http
        .get(this.baseURL + 'transferencia-oc')
        .pipe(map((resp) => 
        
        resp['data']));
    }
    GuardaTransferenciaAlmacen() {
      let nuevoArregloTemp=[];
      this.detalleTransferencia?.map(
        res => {
          res.hasOwnProperty('idDetalleIngresoAlmacen') ? nuevoArregloTemp.push(res): '' 
        }); 
      var body = { 
        // ...this.detalleSalida
        detalletransferencia: nuevoArregloTemp
      }; 
        return this.http.post(`${this.baseURL}transferencia-oc`, body).pipe(
          map((resp) =>
        //  console.log(resp ))
          
        resp['data'])
          //  console.log(resp['data']))
          // catchError(this.manejarError)
  
        ); 
     
    }

      /*TRANSFERENCIA CON O/C */   


      getListransferenciaSinOcAlmacen() {
        return this.http
          .get(this.baseURL + 'transferencia-sinoc')
          .pipe(map((resp) => 
          
          resp['data']));
      }

      GuardaTransferenciaSinOcAlmacen() {
        let nuevoArregloTemp=[];
        this.detalleTransferenciasinoc?.map(
          res => {
            res.hasOwnProperty('idDetalleIngresoAlmacen') ? nuevoArregloTemp.push(res): '' 
          }); 
        var body = { 
          // ...this.detalleSalida
          detalletransferencia: nuevoArregloTemp
        }; 
        // console.log(body);
          return this.http.post(`${this.baseURL}transferencia-sinoc`, body).pipe(
            map((resp) =>
          //  console.log(resp ))
            
          resp['data'])
            //  console.log(resp['data']))
            // catchError(this.manejarError)
    
          );
       
      
       
      }

        /*KARDEX OC*/
        getLisKardexoc() {
          return this.http
            .get(this.baseURL + 'kardex-oc')
            .pipe(map((resp) => 
            
            resp['data']));
        }
                /*KARDEX SIN OC*/
                getLisKardexsinoc() {
                  return this.http
                    .get(this.baseURL + 'kardex-sinoc')
                    .pipe(map((resp) => 
                    
                    resp['data']));
                }
}
