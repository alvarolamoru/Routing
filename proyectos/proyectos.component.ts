import { Component } from '@angular/core';
import { Empleados } from '../comp1/empleados.model';
import { EmpleadoServicioService } from '../empleado.servicio.service';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

volverHome(){
  this.router.navigate([''])
}



  title:string= "Listado de empleados";
  nombreagg:string="";
  apellidoagg:string="";
  cargoagg:string="";
  salarioagg:number=0;
  arrayempleado:Empleados[]=[]
  constructor(private miservicio:EmpleadoServicioService,private midataservice:DataserviceService,private router:Router){
  
  }
  ngOnInit(): void {
    this.arrayempleado=this.midataservice.arrayempleado;
  }
 

  aggempleado(){
    let empleadoagg=new Empleados(this.nombreagg,this.apellidoagg,this.cargoagg,this.salarioagg)
    this.miservicio.muestramensaje("nombre de el empleado registrado: "+empleadoagg.nombre)
    this.midataservice.agregarempleado(empleadoagg);
    this.volverHome()
  }


}
