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
idProducto:number


}
