export interface NrocuentaI {
    id: number;
     data: DataNrocuenta[];
  }
  export interface DataNrocuenta{  
    id:number;
    descripcion_cuenta: string;
    idEmpleado:number;
   
  }