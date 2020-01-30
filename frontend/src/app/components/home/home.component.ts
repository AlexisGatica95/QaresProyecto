import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from './../../services/publicaciones.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  publis : any [] = []; 
  resumen = '';
  filterPublis = '';

  constructor(private publicacionesServices : PublicacionesService) { }
  
  async ngOnInit() {
    // Acá cargamos los productos como peticion a nuestro backend
   let respuesta_server : any= await this.publicacionesServices.getpubli(); // get base service
    
   if(respuesta_server.status === 'ok') {
     
      let publiscrudo = respuesta_server.allpublis

      for (let i = 0; i < publiscrudo.length; i++) {
        let imagenestring = publiscrudo[i].img_p;
        let imagenesarray = imagenestring.split(',');
        imagenesarray.pop();
        publiscrudo[i].img_p = imagenesarray;
        
        if(publiscrudo[i].texto_p.length>99){
        this.resumen = publiscrudo[i].texto_p.substring(0,99)+'...';
        publiscrudo[i].resumen = this.resumen;
        }else{
        this.resumen = publiscrudo[i].texto_p;
        publiscrudo[i].resumen = this.resumen;
        } 
      
      }
      this.publis = publiscrudo;
      
      console.log(this.publis);
      
    };
  }
}
    
