import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './pages/buscar-persona/buscar-persona.component';
import { CargarPersonaComponent } from './pages/cargar-persona/cargar-persona.component';

const routes: Routes = [
  {path: "cargar-persona", component: CargarPersonaComponent},
  {path: "buscar-persona", component: BuscarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
