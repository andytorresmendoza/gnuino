export interface AlmacenPrincipalI {
    id: number;
     data: DataAlmacenPrincipal[];
  }
  export interface DataAlmacenPrincipal{  
    id:number;
    nombre_alamcen: string;  
    cod_alamcen: string;
    direccion_almacen: string;
    idPais: number;
    idDepartamento: number;
    idProvincia: number;
    idDistrito: number;
    tipoAlmacen:number;
    estado: number;
    created_at: Date;
    updated_at: Date;
  }