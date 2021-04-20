export interface TipoSalidaI {
    id: number;
     data: DataTipoSalida[];
  }
  export interface DataTipoSalida{  
    id:number;
    descripcion_salida: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }