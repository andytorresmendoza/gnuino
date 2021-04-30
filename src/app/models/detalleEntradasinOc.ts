 
export class DetalleEntradasinOcI {
    id: number;
    data: DataDetalleEntradasinOc[];
}

export interface DataDetalleEntradasinOc {
  id:number;/*hidenn */
  idEntradaSinOc:number;/*hidenn */
  codigoIngresoSinOc:string;
  idProducto:number;
  nombre_producto:string;
 cantidad:number;		
 precioUnitario:number;
 precioTotal:number;
  observaciones:string;   
  idSedePrincipal:number;
  nombreSedePrincipal:string;
  nombreSedeSecundaria:string;
  idSedeSecundaria:number;
  cantidadGlobal:number;
  cantidadPrincipal:number;
  cantidaSecundaria:number;
  cantidadDevuelta:number;
  nombre_almacenS:string 
 
}
 
 