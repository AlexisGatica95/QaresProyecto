import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form : FormGroup;
  constructor(private usuariosService : UsuariosService) { }

  arrayValidators = [];
  ngOnInit() {
    // this.arrayValidators.push('Validators.required');
    // this.arrayValidators.push('Validators.minLeng')
    // activar los controles
    this.form = new FormGroup({
      'nombre' : new FormControl('',[Validators.required]),
      'apellido' : new FormControl('', [Validators.required]),
      'telefono' : new FormControl('', [Validators.required]),
      'mail' : new FormControl('', [Validators.required,Validators.email]),
      'password' : new FormControl('', [Validators.required,Validators.minLength(6)])

    })
  }

  async registrar() {
    
    let post_ok : any = await this.usuariosService.postUsuario(this.form.value);
    if(post_ok.status == "ok") {
      await Swal.fire({
        position: 'center',
        icon: 'success',
        html: '<b class="texto">chequea tu mail para habilitar la tu cuenta </b>',
        width: 300,
        timer: 3000
      })
      this.form.reset();
      location.href="../home";
    } else {

    }
  }

}
