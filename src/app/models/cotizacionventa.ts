
export interface CotizacionVentaI {
  id: string;
  data: DataCotizacionVenta[];
}

export interface DataCotizacionVenta {
  id: number;
  nroCotizacion: string;
  idTipoCotizacion: number;
  codigo_cotizacion_num_venta: string;
  idCliente: number;
  idEmpleado: number;
  idDistrito: number;
  idLinea: number; 
  detalle: string;
  fechaCotizacion: string;
  fechaEntrega:string;
  descuento_cot: number;
  costo_delivery: number;
  total_productos: number;
  estadoCotizacion: string;

  idTipoMoneda: number;
  totalGeneral: number;
  nombre_empleado: string;
  nombre_cliente: string;
  // NUEVO
  //telefono: string;
  //direccion: string;


}