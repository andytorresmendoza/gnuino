export interface VentaDirectaI {
  id: string;
  data: DataVentaDirecta[];
}

export interface DataVentaDirecta {
  id: number;
  nroCotizacion: string;
  idTipoCotizacion: number;
  codigo_cotizacion_dir_num_venta: string;
  idCliente: number;
  idEmpleado: number; 
  idLinea: number;
  detalle: string;
  fechaVentaDirecta: string; 
  descuento_venta: any; 
  total_productos: any;
  estadoCotizacion: string; 
  idTipoMoneda: number;
  monto_total: any;
  nombre_empleado: string;
  nombre_cliente: string;
  idTipoPago: number;
  idBanco: number;
  nroVouher: string;
  porcentajeDscto: any;
  
  idCampain:number;
  idCanalVenta:number;
  descripcion_catcli:string;
  idcategoriaCliente:number;
 
}
