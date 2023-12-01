import { Injectable } from '@angular/core';
import { Empleados } from './comp1/empleados.model';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 
  empleado1=new Empleados("Darwin","Elegiga","Programador", 400);
  empleado2=new Empleados("Arwin","Elegiga","Constructor", 100);
  empleado3=new Empleados("Rwin","Elegiga","Vendedor", 1100);

  arrayempleado:Empleados[]=[this.empleado1,this.empleado2,this.empleado3]
  agregarempleado(empleado:Empleados) {
    this.arrayempleado.push(empleado);
   }
  encontrarEmpleado(index:number){
    return this.arrayempleado[index]

  }
  actualizarEmpleado(indice:number,empleado:Empleados){
    this.arrayempleado[indice]=empleado;
  }
  eliminarempleado(indice:number){
    this.arrayempleado.splice(indice,1)

  }
}
