import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarComponent } from './components/publicar/publicar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DivpublicarComponent } from './components/divpublicar/divpublicar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';




const routes: Routes = [
 {path: 'buscador', component : BuscadorComponent},
 {path: 'publicar',component : PublicarComponent },
 {path: 'divpublicar', component : DivpublicarComponent},
 {path: 'login', component : LoginComponent},
 {path: 'registro', component : RegistroComponent},
 {path: 'navbar', component : NavbarComponent},
 {path: 'home', component : HomeComponent},
 {path: 'perfil', component : PerfilComponent},

 {path: '**', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
