export class DetalleEmpleadoDeliveryI {
    id: number;
    data: DatEmpleadoDelivery[];
}

export interface DatEmpleadoDelivery {
  id:number;
  idOrdenVenta:number,   
  idEmpleado:number;
  idBanco:number; 
  codigo_orden_num_venta:string;
  preciodelivery:number;
  idTipoPago:number 
  fechaEnvio:string;
  detalleEmpDev:string;
  codigo_empdel_num_venta:string;
  idDistrito:number;

  

  

 

 
   
  
}
 