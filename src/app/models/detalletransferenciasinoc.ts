export class DetalleTransferenciasinOcI {
    id: number;
    data: DataDetalleTransferenciasinOc[];
}
// INTEGRAR MIS APIS INTERFACES
export interface DataDetalleTransferenciasinOc {
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
  
  fechaTransferencia:string;
  nombreSedeSecundario:string;
  idSedeSecundaria:number;
  cantidadTransferencia:number;
  detalleTransferencia:string;

  
 

  
}
 