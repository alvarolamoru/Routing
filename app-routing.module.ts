import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Comp1Component } from './comp1/comp1.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ErrorComponent } from './error/error.component';



const appRoutes:Routes=[
  {path:'',component:Comp1Component},
  {path:'proyectos',component:ProyectosComponent},
  {path:'Quienes',component:QuienesComponent},
  {path:'Contacto',component:ContactoComponent},
  {path:'actualizar/:id',component:ActualizarComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
}