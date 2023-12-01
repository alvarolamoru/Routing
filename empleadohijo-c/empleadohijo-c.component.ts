import { Component, Input } from '@angular/core';
import { Empleados } from '../comp1/empleados.model';
import { EmpleadoServicioService } from '../empleado.servicio.service';

@Component({
  selector: 'app-empleadohijo-c',
  templateUrl: './empleadohijo-c.component.html',
  styleUrls: ['./empleadohijo-c.component.css']
})
export class EmpleadohijoCComponent {
  @Input() empleadodelista: Empleados= new Empleados;
  @Input() indice:number=0;
  constructor(private miservicio:EmpleadoServicioService){}
  
  
  caracteristicas:string[]=[];

  addCaracteristica(item:string)
  {
    this.caracteristicas.push(item);  
  }
}
