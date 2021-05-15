export class DetalleDevolucionPI {
  id: number;
  data: DataDetalleDevolucionP[];
}

export interface DataDetalleDevolucionP {
  id:number;/*hidenn */ 
  idDetalleIngresoAlmacen:number;
  idIngresoAlmacen:number;
  cantidadPrincipal:number;
  cantidadDevolucion:number;
  idTipoDevolucion:number;
  idTipoIngreso:number;
  detalleDevolucion:string;
  fechaDevolucion:string;
  idProducto:number, 

 
  idOrden:number,/*hidenn */ 
  nombre_producto: string;
  detalleNameProducto:string;   

  cantidad:number;		
  precio_unidad:number;
  precio_total:number;
  observaciones:string;  
  cantidadGlobal:number; 
  detalleNameUnidadMedida:string;  
  cantidadSalida:number; 
 

  descripcion_devolucion:string;
 


  
}
 

 