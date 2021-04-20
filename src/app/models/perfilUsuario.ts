export interface PerfilusuarioI {
    id: number;
     data: DataPerfilusuario[];
  }
  export interface DataPerfilusuario{  
    id:number;
    tipo_usuario: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }