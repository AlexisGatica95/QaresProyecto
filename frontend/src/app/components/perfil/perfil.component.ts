import {GetpublisService} from './../../services/getpublis.service';
import { Component, OnInit } from '@angular/core';
import { ModalComponent} from './../modal/modal.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  nombre: string;
  id_usr = localStorage.getItem('id');
  publis : any [] = []; 
 
  constructor(public dialog: MatDialog,private getpublisServices : GetpublisService) { }

  async ngOnInit() {
  
    if(localStorage.getItem('usuario') != null){
    this.nombre = localStorage.getItem('nombre')   
    } 

    let publisxid : any= await this.getpublisServices.getpublis(this.id_usr);
    console.log(publisxid);
    if (publisxid.status === 'ok') {
      console.log('entro aca')
      let publiscrudo = publisxid.getpublis;
     
      for (let i = 0; i < publiscrudo.length; i++) {
     console.log(publisxid[i])
     let imagenestring = publiscrudo[i].img_p;
        let imagenesarray = imagenestring.split(',');
        imagenesarray.pop();
        publiscrudo[i].img_p = imagenesarray;
    
    }this.publis = publiscrudo; 
    console.log(this.publis);
     }
     
      
     
  }

  opendialog():void{
    const dialogRef= this.dialog.open(ModalComponent, {
      panelClass: 'custom-dialog-container'
    });
    
    dialogRef.afterClosed().subscribe( result =>{ 
    })
  }

}
