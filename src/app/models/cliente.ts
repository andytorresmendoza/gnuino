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
    dni_cliente: string;
    direccion_cliente:string;
    telefono_cliente:string;
    email_cliente:string;
    idTipoDocumento:number;
    idPais:number;
    idDepartamento:number;
    idProvincia:number;
    idDistrito:number;
    idcategoriacliente:number 

    
  }