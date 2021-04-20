export interface TipoPagoI {
    id: number;
     data: DataTipoPago[];
  }
  export interface DataTipoPago{  
    id:number;
    descripcion_pago: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }