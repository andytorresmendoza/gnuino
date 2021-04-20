export interface UnidadMedidaI {
    id: number;
     data: DataUnidadMedida[];
  }
  export interface DataUnidadMedida{  
    id:number;
    detalle: string;
    alto: string;
    ancho: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }