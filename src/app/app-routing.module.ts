import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './paquete/crear/crear.component';
import { MostrarComponent } from './paquete/mostrar/mostrar.component';


const routes: Routes = [
  { path: 'crear', component: CrearComponent  },
  { path: 'mostrar', component: MostrarComponent  },
  { path: 'crear/:id', component : CrearComponent },

  { path: '', redirectTo: 'mostrar', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
