export interface Reqresponse {
  data:  ReqCategoria[];
}
interface ReqCategoria {
  id: string;
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
