import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { PublicarComponent } from '../publicar/publicar.component';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ModalComponent implements OnInit {

  constructor(public dialog:MatDialogRef<PublicarComponent>) { }

  

  ngOnInit() {
  }

 

}
