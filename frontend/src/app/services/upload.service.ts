import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService extends BaseService {

  postData(obj,id) {
    try {
      // upload/id_cliente
      this.setEndPoint('publicacion/'+id);
      this.getHttpOptions(true);
      // http://localhost:3001/publicacion/:id
      return this.post(obj);


    } catch(error) {
      throw error;
    }
  }

  baseData(obj) {
    try {
      // upload/id_cliente
      this.setEndPoint('upload');
      this.getHttpOptions(true);
      // http://localhost:3001/upload/1
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  getProvincias() {
    try {
      this.setEndPoint('publicacion/provincias');
      //esto conecta con la ruta del controler del backend
      this.getHttpOptions(true);
      console.log('en eltry eset'+this.endpoint);
      return this.get();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}