import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicarComponent } from './components/publicar/publicar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { DivpublicarComponent } from './components/divpublicar/divpublicar.component';
import { FilterPipe } from './pipe/filter.pipe';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicarComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    PerfilComponent,
    ModalComponent,
    DivpublicarComponent,
    FilterPipe,
    BuscadorComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,//para hacer un formulario reactivo
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  //agrego esto para crear un modal
  entryComponents:[ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
