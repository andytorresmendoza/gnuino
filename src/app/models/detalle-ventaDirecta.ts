 
export class DetalleVentaDirectaI {
    id: number;
    data: DataDetalleVentaDirecta[];
}

export interface DataDetalleVentaDirecta {
  id:number;/*hidenn */
  idCotizacionVentaDirecta:number;/*hidenn */
  codigo_cotizacion_num:string;
  idProducto:number;
  nombre_producto:string;
  cantidad:number;		
  precioVenta:number;
  stock:number;
//  cantidad precio_total:number;
  observacion:string;   
  /*nuevo */
  detalleNameUnidadMedida :string;
  idAlmacen:number;
  nombre_alamcen:string;
}
 
 