export class DetalleSalidaAlmaIcenI {
    id: number;
    data: DataDetalleSalidaAlmacen[];
}

export interface DataDetalleSalidaAlmacen {
  id:number;
  idProducto:number,   
  idTipoSalida:number;
  idTipoIngreso:number;
  cantidadSalida:number;
  detalleSalida:string;
  fechaSalida:string;  
  nombre_producto: string; 
  descripcion_salida:string;
  // cantidadPrincipal:number; //no implementado
  // cantidadPrincipal:number; 
  // cantidad:number;		 
  // observaciones:string;  
  // cantidadGlobal:number;  
  //nuevos

  

 

 
   
  
}
 