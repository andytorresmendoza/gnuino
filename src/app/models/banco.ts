export interface BancoI {
    id: number;
     data: DataBanco[];
  }
  export interface DataBanco{  
    id:number;
    descripcion_banco: string;
    idNroCuenta: number;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }