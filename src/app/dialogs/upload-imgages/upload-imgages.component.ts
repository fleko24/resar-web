import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { PropiedadService } from 'src/shared/services/propiedad.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { last, concatMap } from 'rxjs/operators';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-upload-imgages',
  templateUrl: './upload-imgages.component.html',
  styleUrls: ['./upload-imgages.component.css']
})
export class UploadImgagesComponent implements OnInit, OnDestroy{

  mainImg: File;
  activated = false;
  buttonChooseMainActivated = true;
  uploadPercentage$: Observable<number>;
  main_foto_exists: boolean;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
               private dialogRef: MatDialogRef<UploadImgagesComponent>,
               private propiedadService: PropiedadService,
               private storage: AngularFireStorage,
               public dialog: MatDialog
             ) {
                  this.dialogRef.disableClose = true;
                }

  ngOnInit() {
  }

  setMainImage(event: any) {
    this.mainImg = event.target.files[0];
    if (this.mainImg) {
      this.activated = true;
    }
  }

  /***********************************************************************/
  /*** Chequea si la foto existe, si existe abre el dialogo que pregunta
   *** si desea reemplazar la imagen, si no existe llama a uploadMainImage
   ************************************************************************/
  uploadQuestion() {
    if (this.data.main_foto) {
      this.main_foto_exists = true;
      this.opernReplaceDialog();
    } else {
      this.main_foto_exists = false;
     this.uploadMainImage();
    }
  }

  /***********************************************************************/
  /*** Dialogo que pregunta si se desea reemplaar la imagen
   ************************************************************************/
  opernReplaceDialog() {
    const dialogRef = this.dialog.open( QuestionComponent, {
      width: '400px',
      data: {
        title: 'Reemplazar imagen',
        question: 'Desea reemplazar la imagen existente?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      // borrar la imagen de la base de datos
      // uploadMainImage()
        this.uploadMainImage();
      } else {

      }
    });
  }
  /***********************************************************************/
  /*** Metodo que sube la main foto a firebase y actualia la url en el
   *** atributo main_foto en la propiedad
   ************************************************************************/
  uploadMainImage() {

    const filePath = `propiedades/${this.data.reference}/main/${this.mainImg.name}`;
    const task = this.storage.upload(filePath, this.mainImg);
    this.uploadPercentage$ = task.percentageChanges();

    task.snapshotChanges().pipe(
      last(),
      concatMap(() => this.storage.ref(filePath).getDownloadURL())
    ).subscribe(url => {
      this.propiedadService.update(this.data.id, {main_foto: url})
      .then(() => {
          console.log('success');
          this.dialogRef.close();
      })
      .catch((error) => console.log(error));
    });

    this.buttonChooseMainActivated = false;
    this.activated = false;
  }



  ngOnDestroy() {

  }

}

