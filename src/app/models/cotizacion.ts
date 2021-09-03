import { Moment } from 'moment';
export interface CotizacionI {
  id: string;
  data: DataCotizacion[];
}

export interface DataCotizacion {
  id: number;
  nroCotizacion: string;
  codigo_cotizacion_num: string;
  idProovedor: number;
  idEmpleado: number;
  nombre_empleado: string;
  nombre_proovedor: string;
  detalle: string;
  fecha_entrega: string;
  descuento_cot: any;
  costo_envio: any;
  total_costo: any;
  estadoCotizacion: string;
  idTipoMoneda: number;
  totalGeneral: any;
  idTipoCotizacion: number;
  idLinea: number;
  porcentajeDscto: any;


}