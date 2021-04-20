 
export interface DepartamentoI {
    id: number;
     response: DataDepartamento[];
  }
  export interface DataDepartamento{  
    id:number;
    nombre: string;   
     
  }
/*PROVINCIA */
  export interface ProvinciaI {
    id: number;
    response: DataProvincia[];
   
  }
  export interface DataProvincia{  
    id:number;
    nombre_provincia:string;
    idDepartamento:number;
  }
  /*DISTRITO */
  export interface DistritoI {
    id: number;
    response: DataDistrito[];
   
  }
  export interface DataDistrito{  
    id:number;
    nombre_distrito:string;
    idProvincia:number;
    idDepartamento:number;
  }
 