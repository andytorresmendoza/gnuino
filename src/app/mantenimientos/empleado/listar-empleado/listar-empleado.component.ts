import { Component, OnInit } from '@angular/core'; 
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataEmpleado } from '../../../models/empleado';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  empleados: DataEmpleado[] = [];
  cargando = true; 
 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getEmpleado()
    .subscribe(resp => {
      
       this.empleados = resp; 
      this.cargando = false;
      console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });

  }

  Editar(empleado:DataEmpleado):void{
    localStorage.setItem("id",empleado.id.toString());
    this.router.navigate(["../mantenimientos/editempleado"]);
  
  }
}