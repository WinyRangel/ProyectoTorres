import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './front-foro/inicio/inicio.component';
import { PublicacionComponent } from './front-foro/publicacion/publicacion.component';
import { SearchComponent } from './front-foro/search/search.component';
import { AdministrarComponent } from './front-foro/administrar/administrar.component';
import { ValidadosComponent } from './front-foro/validados/validadoscomponent';
import { RechazadosComponent } from './front-foro/rechazados/rechazados.component';
import { AboutComponent } from './front-foro/about/about.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/publicacion',
    pathMatch:'full'
  },
  {
    path:'publicacion',
    component:PublicacionComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'about/:cat',
    component:AboutComponent
  },
  {
    path:'admnistrar/:id',
    component:AdministrarComponent
  },
  {
    path:'validados/:id',
    component:ValidadosComponent
  },
  {
    path:'rechazados',
    component:RechazadosComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
