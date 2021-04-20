export interface TipodocumentoI {
    id: number;
     data: DataTipodocumento[];
  }
  export interface DataTipodocumento{  
    id:number;
    tipo_documento: string;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }