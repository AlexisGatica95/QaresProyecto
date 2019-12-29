import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarComponent } from './components/publicar/publicar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [

 {path: 'publicar',component : PublicarComponent },
 {path: 'login', component : LoginComponent},
 {path: 'registro', component : RegistroComponent},
 {path: 'navbar', component : NavbarComponent},
 {path: 'home', component : HomeComponent},
 {path: 'perfil', component : PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
