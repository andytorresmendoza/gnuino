export interface PrecioDelivery {
    id: number;
     data: DataPrecioDelivery[];
  }
  export interface DataPrecioDelivery{  
    id:number;
    idEmpleado: number; 
    idDistrito: number; 
    precioDelivery:number;
  }