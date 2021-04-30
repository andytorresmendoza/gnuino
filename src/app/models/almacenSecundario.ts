export interface AlmacenSecundarioI {
  id: number;
     data: DataAlmacenSecundario[];
  }
  export interface DataAlmacenSecundario{  
    id:number;
    nombre_almacenS: string;  
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