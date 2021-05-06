 
export interface SalidaProductosCerradosI {
    id: string;
    data: DataSalidaProductos[];
}

export interface DataSalidaProductos {
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