import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-c',
  templateUrl: './caracteristicas-c.component.html',
  styleUrls: ['./caracteristicas-c.component.css']
})
export class CaracteristicasCComponent {
  
 @Output() Caracteristicaemisora = new EventEmitter<string>();
  
  EnviarCaracteristica(newItem:string)
  {
    this.Caracteristicaemisora.emit(newItem);
  }
}
