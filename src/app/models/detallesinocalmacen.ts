export class DetalleSalidasinOcI {
    id: number;
    data: DataDetalleSalidasinOc[];
}
// INTEGRAR MIS APIS INTERFACES
export interface DataDetalleSalidasinOc {
  id:number;/*hidenn */ 
  idEntradaSinOc:number;
  //  idIngresoAlmacen:number;
  idDetalleIngresoAlmacen:number; 
  idProducto:number, 
  idTipoSalida:number;
  idTipoIngreso:number;
  cantidadSalida:number;
  detalleSalida:string;
  fechaSalida:string;

  nombre_producto: string; 

  cantidadPrincipal:number; 
  cantidad:number;		
 
  detalleNameUnidadMedida:string; 
  //nuevos

  descripcion_salida:string

  
 

  
}
 