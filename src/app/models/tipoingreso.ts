export interface TipoIngresoI {
    id: number;
     data: DataTipoIngreso[];
  }
  export interface DataTipoIngreso{  
    id:number;
    descripcion_ingreso: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }