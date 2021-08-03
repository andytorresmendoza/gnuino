
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
    // idDistrito: number;
    idLinea: number; 
    detalle: string;
    fechaVentaDirecta: string;
  
    descuento_venta: number;
  
    total_productos: number;
    estadoCotizacion: string;
  
    idTipoMoneda: number;
    monto_total: number;
    nombre_empleado: string;
    nombre_cliente: string;
    idTipoPago:number;
    idBanco:number;
    nroVouher:string;
    // NUEVO
    //telefono: string;
    //direccion: string;
  
  
  }