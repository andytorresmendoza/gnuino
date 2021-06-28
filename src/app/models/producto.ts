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
    codigo_producto: string;
    codigo_producto_num: string;
    detalle_prod:string;
    idTipoProducto:number;
    codigoProductoBarra:string;
    idLinea:number;
  }