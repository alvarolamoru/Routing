import { Component } from '@angular/core';
import { Empleados } from '../comp1/empleados.model';
import { EmpleadoServicioService } from '../empleado.servicio.service';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  
  title:string= "Listado de empleados";
  nombreagg:string="";
  apellidoagg:string="";
  cargoagg:string="";
  salarioagg:number=0;
  arrayempleado:Empleados[]=[]
  indice:number=0;
  constructor(private miservicio:EmpleadoServicioService,private route:ActivatedRoute,private midataservice:DataserviceService,private router:Router){
  
  }
  
  ngOnInit(): void {
    this.arrayempleado=this.midataservice.arrayempleado;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleados=this.midataservice.encontrarEmpleado(this.indice)
    this.nombreagg=empleado.nombre;
    this.apellidoagg=empleado.apellido,
    this.cargoagg=empleado.cargo,
    this.salarioagg=empleado.salario
  };
   
volverHome(){
  this.router.navigate([''])
}



 

  aggempleado(){
    let empleadoagg=new Empleados(this.nombreagg,this.apellidoagg,this.cargoagg,this.salarioagg)
    this.miservicio.muestramensaje("nombre de el empleado registrado: "+empleadoagg.nombre)
    this.midataservice.agregarempleado(empleadoagg);
    this.volverHome()
  }

  actualizarempleado(){
    let empleado=new Empleados(this.nombreagg,this.apellidoagg,this.cargoagg,this.salarioagg);
    this.midataservice.actualizarEmpleado(this.indice,empleado);
    this.volverHome();
  }
  eliminarempleado(){
    this.midataservice.eliminarempleado(this.indice)
    this.volverHome()
  }
}
