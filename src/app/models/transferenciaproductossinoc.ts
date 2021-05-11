 
export interface TransferenciaSinOcCerradosI {
    id: string;
    data: DataTransferenciaSinOcCerrado[];
}

export interface DataTransferenciaSinOcCerrado {
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