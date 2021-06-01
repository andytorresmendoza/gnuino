export class DetalleIngresoAlmacenI {
    id: number;
    data: DataDetalleIngresoAlmacen[];
}

export interface DataDetalleIngresoAlmacen {
  id:number;/*hidenn */ 
  idIngresoAlmacen:number;
  idDetalleCotizacion:number; 
  idOrden:number,/*hidenn */
  idProducto:number,
  // codigo_cotizacion_num:string; /*nuevo */ 
  // idCotizacion:number;  
  nombre_producto: string;
  detalleNameProducto:string;  
  // idSedePrincipal:number;
  // idSedeSecundaria:number
  // nombreSedePrincipal:string;
  // nombreSedeSecundario:string 
  cantidadPrincipal:number;
  // cantidaSecundaria:number;
  // cantidadDevuelta:number; 
  cantidad:number;		
  precio_unidad:number;
  precio_total:number;
  observaciones:string;  
  cantidadGlobal:number; 
  detalleNameUnidadMedida:string;
  idSedePrincipal: number;
  nombre_alamcen:string;
  isAvailable? :boolean;
  // detalleNameSedePrincipal:string;
  // detalleNameSedeSecundaria: string;
  // stockTotal:number;



  // datadetalle:DataDetalleSedeIngreso[];

  
}

/*export interface DataDetalleSedeIngreso {
 
  idSedePrincipal:number, 
  idSedeSecundaria:number,
  cantidadPrincipal:number, 
  cantidaSecundaria:number,
  cantidadDevuelta:number		 
  
  
}*/
 
 