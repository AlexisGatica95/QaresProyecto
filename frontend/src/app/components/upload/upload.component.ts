import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  comentario : string = '';
  selectedFile = null;
  cuenta : string = '0';
  id_user = 5 ;
  constructor(private upload : UploadService) { }

  archivoSeleccionado(valor) { 
    console.log(valor);
    // en caso que sea solo una imagen (<input type='file'> )
    this.selectedFile = valor.target.files[0];
    // {IMAGEN}
  }

  async subir() {
    // paquete de datos
    const fd = new FormData();
    // append('key','valor')
    // req.body.comentario
    // {key : 'value'}
    fd.append('comentario', this.comentario);
    // 'file', imagen, 'dni.jpg'
    fd.append('file',this.selectedFile, this.selectedFile.name);
    fd.append('cuenta',this.cuenta)

    let rta : any = await this.upload.postData(fd,this.id_user);
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

  ngOnInit() {

      // get de todos los productos
      // app.miproyecto.com.ar/images/
      
    }

}