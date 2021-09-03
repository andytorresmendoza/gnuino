import * as moment from 'moment';
export interface EmpleadoI {
    id: number;
     data: DataEmpleado[];
  }
  export interface DataEmpleado{  
    id:number;
    nombre_empleado: string;
    apellidos_pat_empleado: string;
    apellidos_mat_empleado:string;
    sexo_empleado: string;
    idTipoDocumento:number;
    
    dni_empleado: string;
    direccion_empleado:string;
    email_empleado:string;
    fecha_empleado:  string;  
    idPais: number; 
    idPerfilUsuario:number; 
     estado: number;
    // created_at: Date;
    // updated_at: Date;
  }