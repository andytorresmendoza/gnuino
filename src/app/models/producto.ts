export interface ProductoI {
    id: number;
     data: DataProducto[];
  }
  export interface DataProducto{  
    id:number;
    nombre_producto: string;
    idCategoria: number;
    idModelo: number;
    idUnidadMedida: number;
    estado: number;
    created_at: Date;
    updated_at: Date;
    codigo_producto: string;
    codigo_producto_num: string;
  }