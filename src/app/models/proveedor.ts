export interface ProveedorI {
    id: number;
     data: DataProveedor[];
  }
  export interface DataProveedor{  
    id:number;
    nombre_proovedor: string;
    ruc_proovedor: string;
    telefono_proovedor:string;
    direccion_proovedor: string;
    email_proovedor: string;
    idPais:number;
    idProvincia:number;
    idDistrito:number;
    idDepartamento:number;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }