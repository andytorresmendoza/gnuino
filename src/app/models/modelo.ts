export interface ModeloI {
    id: number;
     data: DataModelo[];
  }
  export interface DataModelo{  
    id:number;
    nombre_modelo: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }