 import { Moment } from 'moment';    
export interface CotizacionI {
    id: string;
    data: DataCotizacion[];
}

export interface DataCotizacion {
  id:                    number;
  nroCotizacion:         string;
    codigo_cotizacion_num: string;
    idProovedor:           number;
    idEmpleado:            number;
    nombre_empleado:string;
    nombre_proovedor:string;
    detalle:       string;
    fecha_entrega:         string;
    descuento_cot:         number;
    costo_envio:           number;
    total_costo:           number; 
    estadoCotizacion: string; 
   idTipoMoneda:number;
   totalGeneral: number;
   // NUEVO
   idTipoCotizacion:number;
   idLinea:number;
   porcentajeDscto:number;
    // detalleCotizacion: DataDetalleCotizacion[];
    
    
    // DeletedOrderItemIDs: string;
   
}