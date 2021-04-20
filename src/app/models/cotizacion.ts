import { DecimalPipe } from "@angular/common";
import { DataDetalleCotizacion } from "./detalle-cotizacion";

export interface CotizacionI {
    id: string;
    data: DataCotizacion[];
}

export interface DataCotizacion {
  id:                    number;
  nroCotizacion:         string;
    // codigo_cotizacion_num: string;
    idProovedor:           number;
    idEmpleado:            number;
    detalle:       string;
    fecha_entrega:         string;
    descuento_cot:         number;
    costo_envio:           number;
    total_costo:           number; 
    // detalleCotizacion: DataDetalleCotizacion[];
    
    
    // DeletedOrderItemIDs: string;
   
}