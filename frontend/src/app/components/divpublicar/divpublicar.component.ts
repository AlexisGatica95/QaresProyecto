import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent} from './../modal/modal.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-divpublicar',
  templateUrl: './divpublicar.component.html',
  styleUrls: ['./divpublicar.component.css']
})
export class DivpublicarComponent implements OnInit {

  constructor(private router : Router,public dialog: MatDialog) { }

  ngOnInit() {
  }

  opendialog():void{
    const dialogRef= this.dialog.open(ModalComponent, {
      panelClass: 'custom-dialog-container'
    });
    
    dialogRef.afterClosed().subscribe( result =>{ 
    })
  }
  

}
