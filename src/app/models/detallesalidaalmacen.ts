export class DetalleSalidaAlmaIcenI {
    id: number;
    data: DataDetalleSalidaAlmacen[];
}

export interface DataDetalleSalidaAlmacen {
  id:number;/*hidenn */ 
  idIngresoAlmacen:number;
  idDetalleCotizacion:number; 
  idOrden:number,/*hidenn */
  idProducto:number, 
  nombre_producto: string;
  detalleNameProducto:string;   
  cantidadPrincipal:number;
 
  cantidad:number;		
  precio_unidad:number;
  precio_total:number;
  observaciones:string;  
  cantidadGlobal:number; 
  detalleNameUnidadMedida:string; 
  //nuevos
  cantidadDevolucion:number;
  descripcion_salida:string
  idtipoSalida:number;
  detalleDevolucion:string;
  
}
 