import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService extends BaseService{

  async getpubli() {
    try {
      this.setEndPoint('publicacion/allpublis');
      return this.get();
    } catch (error) {
      
    }
  }
  
}
