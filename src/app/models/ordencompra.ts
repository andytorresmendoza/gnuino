export interface OrdenCompraI {
    id: string;
    data: DataOrdenCompra[];
}

export interface DataOrdenCompra {
  id:                    number;
  // nroCotizacion:         string; 
  idCotizacion:  number;
  idProovedor:           number;
  idEmpleado:            number;
  idTipoPago: number;
  idBanco: number;
  idNroCuenta: number;
  // detalle:                string;
  fecha_entrega:         string;
 
  // descuento_cot:         string;
  // costo_envio:           string;
  // total_costo:           number; 
 
   
}