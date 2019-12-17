import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  //id_usuario = localStorage.getItem('id')
  id_usuario = 5;
  titulo : 'null';
  texto : 'null';
  edad = 'null';
  telefono = 'null';
  mail = 'null';
  provincias : any = [];
  comentario : string = '';
  selectedFile = null;
  selectedFile2 = null;
  cuenta : string = '0';
  habilitar : any = 0;
  provi: any = 0;
  //provincias2: any = [{"id_c":1,"nombre":"Buenos Aires"},{"id_c":2,"nombre":"Avellaneda"},{"id_c":3,"nombre":"Bahia Blanca"},{"id_c":4,"nombre":"Bariloche"},{"id_c":5,"nombre":"Capital Federal"},{"id_c":6,"nombre":"Cordoba"},{"id_c":7,"nombre":"Comodoro Rivadavia"},{"id_c":8,"nombre":"Corrientes"},{"id_c":9,"nombre":"Jujuy"},{"id_c":10,"nombre":"La Plata"},{"id_c":11,"nombre":"Lanus"},{"id_c":12,"nombre":"Lomas de Zamora"},{"id_c":13,"nombre":"Mar del Plata"},{"id_c":14,"nombre":"Mendoza"},{"id_c":15,"nombre":"Merlo"},{"id_c":16,"nombre":"Moreno"},{"id_c":17,"nombre":"Moron"},{"id_c":18,"nombre":"Neuquen"},{"id_c":19,"nombre":"Obera"},{"id_c":20,"nombre":"Posadas"},{"id_c":21,"nombre":"Puerto Madryn"},{"id_c":22,"nombre":"Pilar"},{"id_c":23,"nombre":"Quilmes"},{"id_c":24,"nombre":"Ramos Mejia"},{"id_c":25,"nombre":"Rio Cuarto"},{"id_c":26,"nombre":"Rio Gallegos"},{"id_c":27,"nombre":"Rosario"},{"id_c":28,"nombre":"Salta"},{"id_c":29,"nombre":"San Fernando"},{"id_c":30,"nombre":"San Justo"},{"id_c":31,"nombre":"San Luis"},{"id_c":32,"nombre":"San Martin"},{"id_c":33,"nombre":"San Miguel"},{"id_c":34,"nombre":"Santa Fe"},{"id_c":35,"nombre":"Santa Rosa"},{"id_c":36,"nombre":"Santigo del Estero"},{"id_c":37,"nombre":"Temperley"},{"id_c":38,"nombre":"Tigre"},{"id_c":39,"nombre":"Trelew"},{"id_c":40,"nombre":"Tucuman"},{"id_c":41,"nombre":"Usuahia"}];

  constructor(private upload : UploadService) {  }

  

  archivoSeleccionado(valor) { 
    console.log(valor);
    // en caso que sea solo una imagen (<input type='file'> )
   
    this.selectedFile = valor.target.files[0];
   

    // {IMAGEN}
  }

  async subir() {
    
    console.log('LA CONCHADE TU MADRE ALL BOYS');
    const fd = new FormData();
  
    fd.append('titulo', this.titulo);
    fd.append('texto', this.texto);
    fd.append('edad', this.edad);
    fd.append('telefono', this.telefono);
    fd.append('mail', this.mail);
    fd.append('wsp', this.habilitar);

    fd.append('comentario', this.comentario);
    fd.append('file',this.selectedFile, this.selectedFile.name);
    fd.append('cuenta',this.cuenta)
    console.log('lo tamos intentando');

    let rta : any = await this.upload.postData(fd,this.id_usuario);
    console.log(rta);
    console.log(this.selectedFile.name);
    if (rta.status=="ok"){
      console.log('falta subir a la db');
    }
  }

  select(val) {
    console.log(val);
    this.cuenta = val;
  }

  hab(val) {
    this.habilitar = val;
  }

  selectProvincia(val) {
    this.provi = val;
  }

  async ngOnInit() {

      let rta = await this.upload.getProvincias();
      console.log('la concha de mi vieja');
      this.provincias = rta['provincias'];
      
    }

}