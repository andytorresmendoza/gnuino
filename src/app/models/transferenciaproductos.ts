 
export interface TransferenciaProductosCerradosI {
    id: string;
    data: DataTransferenciaProductos[];
}

export interface DataTransferenciaProductos {
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
 
}