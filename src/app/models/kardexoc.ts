export interface KardexOcI {
    id: number;
       data: DataKardexoc[];
    }
    export interface DataKardexoc{  
      id:number;
      // nombre_almacenS: string;  
      nombreSedeSecundario:string;
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