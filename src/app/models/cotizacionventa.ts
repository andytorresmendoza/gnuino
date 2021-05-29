 
export interface CotizacionVentaI {
    id: string;
    data: DataCotizacionVenta[];
}

export interface DataCotizacionVenta {
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
// NUEVO
   idTipoMoneda:number;
   totalGeneral: number;
    // detalleCotizacion: DataDetalleCotizacion[];
    
    
    // DeletedOrderItemIDs: string;
   
}