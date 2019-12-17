import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService {
//usamos todas las funciones del baseservice

async loginUsuario(obj) {
  try {
    this.setEndPoint('autenticacion/login');
    return this.post(obj);
  } catch(error) {
    throw  error;
  }
}

async postUsuario(obj) {
  try {
    this.setEndPoint('registro');
    return this.post(obj)
  } catch(error) {
    // error
  }
}
  
}
