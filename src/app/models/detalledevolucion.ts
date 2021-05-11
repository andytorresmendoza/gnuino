export class DetalleDevolucionI {
    id: number;
    data: DataDetalleDevolucion[];
}

export interface DataDetalleDevolucion {
  id:number;/*hidenn */ 
  idIngresoAlmacen:number;
  // idDetalleCotizacion:number; 
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
  cantidadSalida:number;
  // descripcion_salida:string
  // idTipoSalida:number;
  // detalleSalida:string;
  fechaDevolucion:string;
  idDetalleIngresoAlmacen:number;
  idTipoIngreso:number;

  descripcion_devolucion:string;
  idTipoDevolucion:number;
  cantidadDevolucion:number;
  detalleDevolucion:string;
  
}
 