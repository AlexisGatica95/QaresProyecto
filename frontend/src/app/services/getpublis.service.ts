import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetpublisService extends BaseService{

getpublis(id_usr){
  try {
    this.setEndPoint('publicacion/getpubli/'+id_usr);
    this.getHttpOptions(true);
    return this.get();
  } catch (error) {
    throw error;
  }
}
}
