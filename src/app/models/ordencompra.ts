export interface OrdenCompraI {
    id: string;
    data: DataOrdenCompra[];
}

export interface DataOrdenCompra {
  id:                    number;
  codigo_orden_num:        string; 
  idCotizacion:  number;
  idProovedor:           number;
  idEmpleado:            number;
  idTipoPago: number;
  idBanco: number;
  idNroCuenta: number;
  // detalle:                string;
  fechaEntrega:         string;
 
   descuento_cot:         number;
  costo_envio:           number;
  total_costo:           number; 
  total_general:          number;

  // nuevos
  fechaEnvio:         string;

  detalleOrden:string;
  idSede: number;
  nombreSedePrincipal:string;
  direccionOrden:string;
  totalGeneral:number;
  nombre_empleado:string;
  nombre_proovedor:string;
  idTipoOc:number;
  idTipoMoneda:number;
   
}