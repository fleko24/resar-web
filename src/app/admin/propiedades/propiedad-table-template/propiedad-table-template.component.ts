import { Component, OnInit, Input } from '@angular/core';
import { Propiedad } from 'src/shared/models/propiedad.model';
import { MatDialog } from '@angular/material';
import { UploadImgagesComponent } from 'src/app/dialogs/upload-imgages/upload-imgages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedad-table-template',
  templateUrl: './propiedad-table-template.component.html',
  styleUrls: ['./propiedad-table-template.component.css']
})
export class PropiedadTableTemplateComponent implements OnInit {

  @Input() propiedad: Propiedad;

  constructor( public dialog: MatDialog,
               private router: Router ) { }

  ngOnInit() {
  }

  openUploadImgDialog(id: string) {
    const dialogRef = this.dialog.open( UploadImgagesComponent, {
      width: '600px',
      data: this.propiedad
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  navigateToEditar(id: string) {
    this.router.navigate(['/admin-resar/edit/' + id]);
    console.log(id);
  }
}
