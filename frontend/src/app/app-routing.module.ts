import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarComponent } from './components/publicar/publicar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [

 {path: 'publicar',component : PublicarComponent },
 {path: 'login', component : LoginComponent},
 {path: 'registro', component : RegistroComponent},
 {path: 'navbar', component : NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
