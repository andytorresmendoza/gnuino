 
export interface EntradasinOcI {
    id: string;
    data: DataEntradaSinOC[];
}

export interface DataEntradaSinOC {
  id:                    number;
//    nroCotizacion:         string;
codigoIngresoSinOc: string;
    idtipoIngreso:number;
    idProveedor:           number;
    idEmpleado:            number;
    nombre_empleado:string;
    nombre_proovedor:string;
    descripcion_ingreso:string;
    detalle:       string;
    fechaIngreso:         string; /*verificar fecha */ 
    totalCosto:           number; 
    idTipoMoneda:number;
    // estadoCotizacion: string;
    // detalleCotizacion: DataDetalleCotizacion[];
    
    
    // DeletedOrderItemIDs: string;
   
}