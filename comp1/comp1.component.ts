import { Component, OnInit } from '@angular/core';
import { Empleados } from './empleados.model';
import { EmpleadoServicioService } from '../empleado.servicio.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  title:string= "Listado de empleados";
  nombreagg:string="";
  apellidoagg:string="";
  cargoagg:string="";
  salarioagg:number=0;
  arrayempleado:Empleados[]=[]
  constructor(private miservicio:EmpleadoServicioService,private midataservice:DataserviceService){
    // 
  }
  ngOnInit(): void {
    this.arrayempleado=this.midataservice.arrayempleado;
  }
 

  aggempleado(){
    let empleadoagg=new Empleados(this.nombreagg,this.apellidoagg,this.cargoagg,this.salarioagg)
    this.miservicio.muestramensaje("nombre de el empleado registrado: "+empleadoagg.nombre)
    this.midataservice.agregarempleado(empleadoagg);
  }
}
