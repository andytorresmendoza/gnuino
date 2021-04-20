export interface EstadoFlujoI {
    id: number;
     data: DataEstadoFlujo[];
  }
  export interface DataEstadoFlujo{  
    id:number;
    detalle_estado: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }