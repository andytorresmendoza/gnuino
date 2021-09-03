 
export class DetalleCotizacionI {
    id: number;
    data: DataDetalleCotizacion[];
}

export interface DataDetalleCotizacion {
  id:number;/*hidenn */
  idCotizacion:number;/*hidenn */
  codigo_cotizacion_num:string;
  idProducto:number;
  nombre_producto:string;
  cantidad:string;		
  precio_unidad:string;
  precio_total:string;
  observaciones:string;   
  /*nuevo */
  detalleNameUnidadMedida :string;
}
 
 