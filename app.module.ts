import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { EmpleadohijoCComponent } from './empleadohijo-c/empleadohijo-c.component';
import { CaracteristicasCComponent } from './caracteristicas-c/caracteristicas-c.component';
import { EmpleadoServicioService } from './empleado.servicio.service';
import { DataserviceService } from './dataservice.service';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    EmpleadohijoCComponent,
    CaracteristicasCComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    ProyectoComponent,
    ActualizarComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmpleadoServicioService,DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
