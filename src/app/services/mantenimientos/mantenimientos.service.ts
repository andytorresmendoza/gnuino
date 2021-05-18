 
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserI } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { map, tap, delay, catchError } from 'rxjs/operators'; //demora o relentiza la respuesta en segundos
import { NrocuentaI, DataNrocuenta } from 'src/app/models/nrocuenta';
import { DataCategoria, CategoriaI } from 'src/app/models/categoria';
import { ModeloI } from 'src/app/models/modelo';
import { DataModelo } from '../../models/modelo';
import { PerfilusuarioI, DataPerfilusuario } from 'src/app/models/perfilUsuario';
import { TipodocumentoI } from '../../models/tipodocumento';
import { DataTipodocumento } from 'src/app/models/tipodocumento';
import { EstadoFlujoI } from '../../models/estadoflujo';
import { DataEstadoFlujo } from 'src/app/models/estadoflujo';
import { TipoDevolucionI, DataTipodevolucion } from '../../models/tipodevolucion';
import { DataTipoIngreso, TipoIngresoI } from 'src/app/models/tipoingreso';
import { TipoSalidaI, DataTipoSalida } from '../../models/tiposalida';
import { TipoPagoI } from 'src/app/models/tipopago';
import { DataTipoPago } from '../../models/tipopago';
import { DataUnidadMedida, UnidadMedidaI } from 'src/app/models/unidadmedida';
import { BancoI, DataBanco } from '../../models/banco';
import { DataProducto, ProductoI } from 'src/app/models/producto';
import { ProveedorI, DataProveedor } from '../../models/proveedor';
import { PaisI } from '../../models/pais';
import { EmpleadoI, DataEmpleado } from '../../models/empleado';
import { DataTipoAlmacen, TipoAlmacenI } from '../../models/tipoalmacen';
import { UsuarioForm } from 'src/app/models/usuario';
 
 
@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {
  headers = new HttpHeaders(); 
  constructor(private http: HttpClient) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "Bearer" + localStorage.getItem("access_token"));
    //  console.log(localStorage.getItem("access_token"));
   }
   baseURL= environment.apiURL;
   
   

 getHeroes() {
         return this.http.get(this.baseURL+ 'categoria')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
         .pipe(
           map(resp=>resp['data']),
           catchError(this.manejarError)
         );

    }
    manejarError(error: HttpErrorResponse){
      console.log('error');
      return throwError('error personalizado')
    }

 /*mantenimiento nro cuenta */

getNroCuenta() {
  return this.http.get(this.baseURL+ 'nro-cuenta')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );

}

getNroCuentaActiva() {
  return this.http.get(this.baseURL+ 'nro-cuenta-activa')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );

}

addNroCuenta(nrocuenta: NrocuentaI):Observable<NrocuentaI>{
  // console.log(nrocuenta);
  return this.http.post<NrocuentaI>(`${this.baseURL}nro-cuenta`,nrocuenta).
  pipe(tap(
    (res:NrocuentaI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getNrocuentaId(id:number){
  return this.http.get<NrocuentaI>(`${this.baseURL}nro-cuenta/`+id)
  .pipe(
    map(
     resp=>resp['data']
  //  console.log( resp['data'])
    )     
 ); 
}
updateNrocuenta(nrocuenta: DataNrocuenta){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataNrocuenta>(`${this.baseURL}nro-cuenta/`+nrocuenta[0].id,nrocuenta[0])

 
}
deleteNroCuenta(nrocuenta: DataNrocuenta){
  // console.log('desdeservic',nrocuenta);
    //  console.log('desdeservic2',nrocuenta.id);
  return this.http.delete<DataNrocuenta>(`${this.baseURL}nro-cuenta/`+nrocuenta.id)
}

/*MANTENIMIENTO CATEGORIA */

getCategoria() {
  return this.http.get(this.baseURL+ 'categoria')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }

  deleteCategoria(categoria: DataCategoria){
  // console.log('desdeservic',nrocuenta);
    //  console.log('desdeservic2',nrocuenta.id);
  return this.http.delete<DataCategoria>(`${this.baseURL}categoria/`+categoria.id)
}

addCategoria(categoria: CategoriaI):Observable<CategoriaI>{
  return this.http.post<CategoriaI>(`${this.baseURL}categoria`,categoria).
  pipe(tap(
    (res:CategoriaI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getCategoriaId(id:number){
  return this.http.get<CategoriaI>(`${this.baseURL}categoria/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}

updateCategoria(categorias: DataCategoria){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataCategoria>(`${this.baseURL}categoria/`+categorias[0].id,categorias[0])

 
}
getModelo() {
  return this.http.get(this.baseURL+ 'modelo')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }

 addModelo(modelo: ModeloI):Observable<ModeloI>{
   console.log(modelo);
  return this.http.post<ModeloI>(`${this.baseURL}modelo`,modelo).
  pipe(tap(
    (res:ModeloI) =>{
      if(res){
       console.log(res );
      }
    })
 );
} 

getModeloId(id:number){
  return this.http.get<ModeloI>(`${this.baseURL}modelo/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateModelo(modelos: DataModelo){
    // console.log('desdeservic',modelos);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataModelo>(`${this.baseURL}modelo/`+modelos[0].id,modelos[0])

 
}
/*PERFIL USUARIO*/
getPerfilusuario() {
  return this.http.get(this.baseURL+ 'perfil')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }

 addPerfilusuario(perfiles: PerfilusuarioI):Observable<PerfilusuarioI>{
  return this.http.post<PerfilusuarioI>(`${this.baseURL}perfil`,perfiles).
  pipe(tap(
    (res:PerfilusuarioI) =>{
      if(res){
       console.log(res );
      }
    })
 );
} 
getPerfilesId(id:number){
  return this.http.get<PerfilusuarioI>(`${this.baseURL}perfil/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updatePerfil(perfiles: DataPerfilusuario){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataPerfilusuario>(`${this.baseURL}perfil/`+perfiles[0].id,perfiles[0])

 
}
/*TIPO DOCUMENTO */
getTipodocumento() {
  return this.http.get(this.baseURL+ 'tipo-documento')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addTipodocumento(tipodocumentos: TipodocumentoI):Observable<TipodocumentoI>{
  return this.http.post<TipodocumentoI>(`${this.baseURL}tipo-documento`,tipodocumentos).
  pipe(tap(
    (res:TipodocumentoI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getTipodocumentoId(id:number){
  return this.http.get<TipodocumentoI>(`${this.baseURL}tipo-documento/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateTipodocumento(tipodocumentos: DataTipodocumento){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataTipodocumento>(`${this.baseURL}tipo-documento/`+tipodocumentos[0].id,tipodocumentos[0])

 
}

/*ESTADO FLUJO*/
getEstadoFlujo() {
  return this.http.get(this.baseURL+ 'estado-flujo')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addEstadoflujo(estadoflujo: EstadoFlujoI):Observable<EstadoFlujoI>{
  return this.http.post<EstadoFlujoI>(`${this.baseURL}estado-flujo`,estadoflujo).
  pipe(tap(
    (res:EstadoFlujoI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}

getEstadoflujoId(id:number){
  return this.http.get<EstadoFlujoI>(`${this.baseURL}estado-flujo/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateEstadoflujo(estadoflujos: DataEstadoFlujo){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataEstadoFlujo>(`${this.baseURL}estado-flujo/`+estadoflujos[0].id,estadoflujos[0])

 
}
/*tipo devoluciones */
getTipoDevolucion() {
  return this.http.get(this.baseURL+ 'tipo-devolucion')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addTipoDevolucion(tipodevoluciones: TipoDevolucionI):Observable<TipoDevolucionI>{
  return this.http.post<TipoDevolucionI>(`${this.baseURL}tipo-devolucion`,tipodevoluciones).
  pipe(tap(
    (res:TipoDevolucionI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getTipoDevolucionId(id:number){
  return this.http.get<TipoDevolucionI>(`${this.baseURL}tipo-devolucion/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateTipoDevolucion(tipodevoluciones: DataTipodevolucion){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataTipodevolucion>(`${this.baseURL}tipo-devolucion/`+tipodevoluciones[0].id,tipodevoluciones[0])

 
}
 
/*TIPO Ingreso */
getTipoingreso() {
  return this.http.get(this.baseURL+ 'tipo-ingreso')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addTipoIngreso(tipoingresos: TipoIngresoI):Observable<TipoIngresoI>{
  return this.http.post<TipoIngresoI>(`${this.baseURL}tipo-ingreso`,tipoingresos).
  pipe(tap(
    (res:TipoIngresoI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getTipoingresoId(id:number){
  return this.http.get<TipoIngresoI>(`${this.baseURL}tipo-ingreso/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateTipoingreso(tipoingresos: DataTipoIngreso){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataTipoIngreso>(`${this.baseURL}tipo-ingreso/`+tipoingresos[0].id,tipoingresos[0])

 
}
/*TIPO SALIDAS */
getTiposalida() {
  return this.http.get(this.baseURL+ 'tipo-salida')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addTiposalida(tiposalidas: TipoSalidaI):Observable<TipoSalidaI>{
  return this.http.post<TipoSalidaI>(`${this.baseURL}tipo-salida`,tiposalidas).
  pipe(tap(
    (res:TipoSalidaI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getTiposalidaId(id:number){
  return this.http.get<TipoSalidaI>(`${this.baseURL}tipo-salida/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateTiposalida(tiposalidas: DataTipoSalida){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataTipoSalida>(`${this.baseURL}tipo-salida/`+tiposalidas[0].id,tiposalidas[0])

 
}
/*TIPO PAGO */
getTipopago() {
  return this.http.get(this.baseURL+ 'tipo-pago')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addTipopago(tipopagos: TipoPagoI):Observable<TipoPagoI>{
  return this.http.post<TipoPagoI>(`${this.baseURL}tipo-pago`,tipopagos).
  pipe(tap(
    (res:TipoPagoI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getTipopagoId(id:number){
  return this.http.get<TipoPagoI>(`${this.baseURL}tipo-pago/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateTipopago(tipopagos: DataTipoPago){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataTipoPago>(`${this.baseURL}tipo-pago/`+tipopagos[0].id,tipopagos[0])

 
}
/*UNIDAD MEDIDA */
getUnidadmedida() {
  return this.http.get(this.baseURL+ 'unidad-medida')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addUnidadmedida(unidamedidas: UnidadMedidaI):Observable<UnidadMedidaI>{
  return this.http.post<UnidadMedidaI>(`${this.baseURL}unidad-medida`,unidamedidas).
  pipe(tap(
    (res:UnidadMedidaI) =>{
      if(res){
       console.log(res );
      }
    })
 );
}
getUnidadmedidaId(id:number){
  return this.http.get<UnidadMedidaI>(`${this.baseURL}unidad-medida/`+id)
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
}
updateUnidadmedida(unidadmedidas: DataUnidadMedida){
  // console.log('desdeservic',nrocuenta);
  // console.log('desdeservic2',nrocuenta[0].id);
  // console.log('desdeservic2',nrocuenta.estado);
  return this.http.put<DataUnidadMedida>(`${this.baseURL}unidad-medida/`+unidadmedidas[0].id,unidadmedidas[0])

 
}
/*TIPO BANCOS */
getBanco() {
  return this.http.get(this.baseURL+ 'banco')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addBanco(bancos: BancoI):Observable<BancoI>{
  console.log(bancos);
  return this.http.post<BancoI>(`${this.baseURL}banco`,bancos).
  pipe(tap(
    (res:BancoI) =>{
      if(res){
      //  console.log(res );
      }
    })
 );
  }
  getBancoId(id:number){
    return this.http.get<BancoI>(`${this.baseURL}banco/`+id)
    .pipe(
      map(resp=>resp['data']),
      catchError(this.manejarError)
    );
  }
  updateBanco(bancos: DataBanco){
  console.log('desdeservic',bancos);
    // console.log('desdeservic2',nrocuenta[0].id);
    // console.log('desdeservic2',nrocuenta.estado);
    return this.http.put<DataBanco>(`${this.baseURL}banco/`+bancos[0].id,bancos[0])
  
   
  }
/*TIPO PRODUCTOS */

getProducto() {
  return this.http.get(this.baseURL+ 'producto')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addProducto(productos: ProductoI):Observable<ProductoI>{
  console.log(productos);
  return this.http.post<ProductoI>(`${this.baseURL}producto`,productos).
  pipe(tap(
    (res:ProductoI) =>{
      if(res){
      //  console.log(res );
      }
    })
 );
  }
  getProductoId(id:number){
    return this.http.get<ProductoI>(`${this.baseURL}producto/`+id)
    .pipe(
      map(resp=>resp['data']),
      catchError(this.manejarError)
    );
  }
  updateProducto(productos: DataProducto){
  console.log('desdeservic',productos);
    // console.log('desdeservic2',nrocuenta[0].id);
    // console.log('desdeservic2',nrocuenta.estado);
    return this.http.put<DataProducto>(`${this.baseURL}producto/`+productos[0].id,productos[0])
  
   
  }
/* PAIS */

getPais():Observable<PaisI[]> {
  return this.http.get<PaisI[]>(this.baseURL+ 'pais');  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
   
 }
 /* DEPARTAMENTO */

getDepartamento() {
  return this.http.get(this.baseURL+ 'departamento')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['response']),
    catchError(this.manejarError)
  );
 }
 
getProvincia(id:number) { /*ver aca */
  return this.http.get(this.baseURL + id +'/provincia')   // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes/
  .pipe(
    map(resp=>resp['response']),
    catchError(this.manejarError)
  );
 }

 


 getDistrito(id:number) {
   console.log('servicio',id);
  return this.http.get(this.baseURL + id +'/distrito')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['response']),
    catchError(this.manejarError)
  );
 }
 /*TIPO PROVEEDOR */

getProveedor() {
  return this.http.get(this.baseURL+ 'proovedor')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
  .pipe(
    map(resp=>resp['data']),
    catchError(this.manejarError)
  );
 }
 addProveedor(proveedores: ProveedorI):Observable<ProveedorI>{
  console.log('del servicio',proveedores);
  return this.http.post<ProveedorI>(`${this.baseURL}proovedor`,proveedores).
  pipe(tap(
    (res:ProveedorI) =>{
      if(res){
     console.log(res );
      }
    })
 );
  }
  getProveedorId(id:number){
    return this.http.get<ProveedorI>(`${this.baseURL}proovedor/`+id)
    .pipe(
      map(resp=>resp['data']),
      catchError(this.manejarError)
    );
  }
  updateProveedor(proveedores: DataProveedor){
  console.log('desdeservic',proveedores);
    // console.log('desdeservic2',nrocuenta[0].id);
    // console.log('desdeservic2',nrocuenta.estado);
    return this.http.put<DataProducto>(`${this.baseURL}proovedor/`+proveedores[0].id,proveedores[0])
  
   
  }

  /*empleado*/
  getEmpleado() {
    return this.http.get(this.baseURL+ 'empleado')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
    .pipe(
      map(resp=>resp['data']),
      catchError(this.manejarError)
    );
   }
   addEmpleado(empleados: EmpleadoI):Observable<EmpleadoI>{
    console.log('del servicio',empleados);
    return this.http.post<EmpleadoI>(`${this.baseURL}empleado`,empleados).
    pipe(tap(
      (res:EmpleadoI) =>{
        if(res){
       console.log(res );
        }
      })
   );
    }
    getEmpleadoId(id:number){
      return this.http.get<EmpleadoI>(`${this.baseURL}empleado/`+id)
      .pipe(
        map(resp=>resp['data']),
        catchError(this.manejarError)
      );
    }
    updateEmpleado(empleados: DataEmpleado){
    console.log('desdeservic',empleados);
      // console.log('desdeservic2',nrocuenta[0].id);
      // console.log('desdeservic2',nrocuenta.estado);
      return this.http.put<DataProducto>(`${this.baseURL}empleado/`+empleados[0].id,empleados[0])
    
     
    }

    /*almacen*/


    getTipoAlmacen() {
      return this.http.get(this.baseURL+ 'sede-almacen')  // json se utiliza solo para firebase// colocamos /heroes porque apuntamos el objeto de la BD https://crud-heroes-db717.firebaseio.com/heroes
      .pipe(
        map(resp=>resp['data']),
        catchError(this.manejarError)
      );
     }
    


    addTipoAlmacen(almacenes: TipoAlmacenI):Observable<TipoAlmacenI>{
      console.log('del servicio',almacenes);
      return this.http.post<TipoAlmacenI>(`${this.baseURL}sede-almacen`,almacenes).
      pipe(tap(
        (res:TipoAlmacenI) =>{
          if(res){
         console.log(res );
          }
        })
     );
      }
      getTipoAlmacenId(id:number){
        return this.http.get<TipoAlmacenI>(`${this.baseURL}sede-almacen/`+id)
        .pipe(
          map(resp=>resp['data']),
          catchError(this.manejarError)
        );
      }
      updateTipoAlmacen(almacenes: DataTipoAlmacen){
      console.log('desdeservic',almacenes);
        // console.log('desdeservic2',nrocuenta[0].id);
        // console.log('desdeservic2',nrocuenta.estado);
        return this.http.put<DataTipoAlmacen>(`${this.baseURL}sede-almacen/`+almacenes[0].id,almacenes[0])
      
       
      }

      /*USUARIOS */
      CrearUsuario(formData: UsuarioForm){
        // console.log('creando');
       return this.http.post(`${this.baseURL}register`,formData) 
      
      }
  
}



