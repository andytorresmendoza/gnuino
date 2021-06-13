export class DetalleTransferenciasI {
    id: number;
    data: DataDetalleTransferencias[];
}

export interface DataDetalleTransferencias {
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
  fechaTransferencia:string;
  idDetalleIngresoAlmacen:number;
  idTipoIngreso:number;

  nombreSedeSecundario:string;
  idSedeSecundaria:number;
  cantidadTransferencia:number;
  detalleTransferencia:string;

  nombre_alamcen:string;
  //nuevos
  cantidadGlobalKardex:number;

  idAlmacen1:number;
  idAlmacen2:number;
  cantidadIngresoOc:number;
}
 