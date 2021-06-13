export class DetalleDevolucionSinOcI {
    id: number;
    data: DataDetalleDevolucionSinOc[];
}
// INTEGRAR MIS APIS INTERFACES
export interface DataDetalleDevolucionSinOc {
  id:number;/*hidenn */ 
  idEntradaSinOc:number;
  //  idIngresoAlmacen:number;
  idDetalleIngresoAlmacen:number; 
  idProducto:number, 
  idTipoSalida:number;
  idTipoIngreso:number;
  cantidadSalida:number;
  detalleSalida:string;
 

  nombre_producto: string; 

  cantidadPrincipal:number; 
  cantidad:number;		
 
  detalleNameUnidadMedida:string; 
  //nuevos
  
  fechaDevolucion:string;  

  descripcion_devolucion:string;
  idTipoDevolucion:number;
  cantidadDevolucion:number;
  detalleDevolucion:string;
  cantidadPendiente:number;
  idSedePrincipal:number;
 

  
}
 