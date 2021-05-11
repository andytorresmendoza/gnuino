 
export interface SalidaSinOcCerradosI {
    id: string;
    data: DataSalidaSinOcCerrado[];
}

export interface DataSalidaSinOcCerrado {
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