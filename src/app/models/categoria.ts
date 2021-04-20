export interface CategoriaI {
  id: number;
   data: DataCategoria[];
}
export interface DataCategoria{  
  id:number;
  nombre_categoria: string;
  estado: number;
  created_at: Date;
  updated_at: Date;
}

// export class CategoriaModel{
//     id: string;
//     nombre_categoria: string;
//     estado: boolean;
//     created_at: Date;
//     updated_at: Date;

//     constructor(){
//         this.estado = true;
//     }
// }
