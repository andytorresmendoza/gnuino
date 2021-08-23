export interface TipoAlmacenI {
    id: number;
     data: DataTipoAlmacen[];
  }
  export interface DataTipoAlmacen{  
    id:number;
    nombre_alamcen: string;  
    cod_alamcen: string;
    direccion_almacen: string;
    idPais: number;
    idDepartamento: number;
    idProvincia: number;
    idDistrito: number;
    tipoAlmacen:number;
     
  }