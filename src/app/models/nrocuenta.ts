export interface NrocuentaI {
    id: number;
     data: DataNrocuenta[];
  }
  export interface DataNrocuenta{  
    id:number;
    descripcion_cuenta: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }