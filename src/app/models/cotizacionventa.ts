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
  fechaEntrega: string; 
  costo_delivery: any;
  total_productos: any;
  estadoCotizacion: string; 
  idTipoMoneda: number;
  totalGeneral: any;
  nombre_empleado: string;
  nombre_cliente: string;
  porcentajeDscto: any;
  descuento_cot: any;
  idCampain:number;
  idCanalVenta:number;
  descripcion_catcli:string;
  idcategoriaCliente:number;
  // NUEVO
  //telefono: string;
  //direccion: string;
}
