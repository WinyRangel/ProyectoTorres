import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './front-foro/inicio/inicio.component';
import { PublicacionComponent } from './front-foro/publicacion/publicacion.component';
import { SearchComponent } from './front-foro/search/search.component';
import { AdministrarComponent } from './front-foro/administrar/administrar.component';
import { ValidadosComponent } from './front-foro/validados/validadoscomponent';
import { RechazadosComponent } from './front-foro/rechazados/rechazados.component';
import { AboutComponent } from './front-foro/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PublicacionComponent,
    SearchComponent,
    AdministrarComponent,
    ValidadosComponent,
    RechazadosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
