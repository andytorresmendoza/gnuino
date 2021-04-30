 
export interface EntradaAlmacenI {
    id: string;
    data: DataEntradaAlmacen[];
}

export interface DataEntradaAlmacen {
    id:  number; 
    idCotizacion:  number;
    idOrden:number;
    idTipoIngreso:number;
    codigoIngreso: string;
     
   
    // id
    // idProovedor:           number;
    // idEmpleado:            number;
    // idTipoPago: number;
    // idBanco: number;
    // idNroCuenta: number;
    // fechaEntrega:         string;
    // idProducto:number;






    /*idOrden:number;
    idProducto:number;
    idDetalleCotizacion: number;
    cantidadGlobal:number;*/
    

//    codigo_orden_num:        string; 
    // detalleCotizacion: DataDetalleCotizacion[];
    
    
    // DeletedOrderItemIDs: string;
   
}