export interface PrecioVenta {
    id: number;
     data: DataPrecioVenta[];
  }
  export interface DataPrecioVenta{  
    id:number;
    idAlmacen: number; 
    idProducto: number; 
    precioVenta:string;
    fechaVenta:string;
  }