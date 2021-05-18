export interface KardexOcI {
    id: number;
       data: DataKardexoc[];
    }
    export interface DataKardexoc{  
      id:number;
      // nombre_almacenS: string;  
      detalleNameProducto:string;
      detalleNameUnidadMedida: string;
      detallePrecioUnidad: string;
      cantidadPrincipal: number;
      cantidadSecundaria: number;
      detalleFechaIngreso: string;
      estadoflujo:number;
   
    }