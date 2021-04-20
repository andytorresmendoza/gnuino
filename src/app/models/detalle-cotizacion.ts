import { DataProducto } from "./producto";

export class DetalleCotizacionI {
    id: number;
    data: DataDetalleCotizacion[];
}

export interface DataDetalleCotizacion {
  id:number;/*hidenn */
  idCotizacion:number,/*hidenn */
  idProducto:number, 
  nombre_producto:string,
  cantidad:number,		
  precio_unidad:number,
  precio_total:number,
  observaciones:string   
}
 
 