import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicioService {

  constructor() { }
  muestramensaje(mensaje:string){
    alert(mensaje);
  };
 
}
