export interface OrdenVentaI {
    id: string;
    data: DataOrdenVenta[];
}

export interface DataOrdenVenta {
  id:                    number;
  codigo_orden_num:        string; 
  idCotizacion:  number;
  nombreCliente: string;
 
  fechaOrden:string;
  fechaEntrega:string;
  nombreEmpleado:string;
  idLinea:number;
  idTipoMoneda:number;
  idDistrito:number;
  direccion:string;
  pagoParcial:number;
  idTipoPago:number;
  idBanco:number;
  numVoucher:string;
  detalle:string;
  descuento_cot:number;
  costo_delivery:number;
  total_productos:number;
  totalGeneral:number;
  codigo_orden_num_venta:string;
  porcentajeDscto:number;
  detalleDistrito:string;
 
  /*idProovedor:           number;
  idEmpleado:            number;
  idTipoPago: number;
  idBanco: number;
  idNroCuenta: number; 
  fechaEntrega:         string; 
   descuento_cot:         number;
  costo_envio:           number;
  total_costo:           number; 
  total_general:          number; 
  fechaEnvio:         string; 
  detalleOrden:string;
  idSede: number;
  nombreSedePrincipal:string;
  direccionOrden:string;
  totalGeneral:number;
  nombre_empleado:string;
  nombre_proovedor:string;
  idTipoOc:number;
  idTipoMoneda:number;*/
   
}