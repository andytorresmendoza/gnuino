 
export interface DevolucionSinOcI {
    id: string;
    data: DataDevolucionSinOc[];
}

export interface DataDevolucionSinOc {
    id:  number; 
    idCotizacion:  number;
    idOrden:number;
    idtipoIngreso:number;
    codigoIngreso: string;
    fechaIngreso:string;
    idProovedor:number;
    idEmpleado:number;
    detalleIngreso:string;
    descripcion_ingreso:string; 
    detalleTipoNameIngreso:string;
    codigoIngresoSinOc:string;
    
}