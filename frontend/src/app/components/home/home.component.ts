import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionesService } from './../../services/publicaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  publis : any [] = [];
  constructor(private publicacionesServices : PublicacionesService, private router : Router) { }

  async ngOnInit() {
    // Acá cargamos los productos como peticion a nuestro backend
    
    let respuesta_server : any= await this.publicacionesServices.getpubli(); // get base service
    
    if(respuesta_server.status === 'ok') {
      this.publis = respuesta_server.allpublis;
    }
  



  }

}
