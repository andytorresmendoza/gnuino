export interface ClienteI {
    id: number;
     data: DataCliente[];
  }
  export interface DataCliente{  
    id:number;
    nombre_cliente: string;
    apellidos_pat_cliente: string;
    apellidos_mat_cliente:string;
    sexo_cliente: string;
    dni_cliente: number;
    direccion_cliente:string;
    telefono_cliente:number;
    email_cliente:string;
    idTipoDocumento:number;
    idPais:number;
    idDepartamento:number;
    idProvincia:number;
    idDistrito:number;
    estado: number; 
  }