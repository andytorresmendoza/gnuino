 
export class DetalleCotizacionVentaI {
    id: number;
    data: DataDetalleCotizacionVenta[];
}

export interface DataDetalleCotizacionVenta {
  id:number;/*hidenn */
  idCotizacion:number;/*hidenn */
  codigo_cotizacion_num:string;
  idProducto:number;
  nombre_producto:string;
  cantidad:number;		
  precio_unidad:number;
  precio_total:number;
  observaciones:string;   
  /*nuevo */
  detalleNameUnidadMedida :string;
}
 
 