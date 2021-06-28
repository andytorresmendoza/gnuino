export interface MovimientoKardex {
    id: number;
     data: DataMovimientoKardex[];
  }
  export interface DataMovimientoKardex{  
    id:number;
    producto: string;
    codigo: string;
    cantidad: string;
    almacen:string;
    fecha:string;
    nroOrden:string;
    precio:string;
    signo:string;
  }