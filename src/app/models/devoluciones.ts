 
export interface DevolucionProductosI {
    id: string;
    data: DataDevolucion[];
}

export interface DataDevolucion {
    id:  number; 
    idCotizacion:  number;
    idOrden:number;
    idTipoIngreso:number;
    codigoIngreso: string;
    fechaIngreso:string;
    idProovedor:number;
    idEmpleado:number;
    detalleIngreso:string;
    descripcion_ingreso:string; 
    idSedePrincipal: number;
    // idTipoDevolucion:number;
 
}