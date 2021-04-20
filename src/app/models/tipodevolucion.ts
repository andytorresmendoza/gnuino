export interface TipoDevolucionI {
    id: number;
     data: DataTipodevolucion[];
  }
  export interface DataTipodevolucion{  
    id:number;
    descripcion_devolucion: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }