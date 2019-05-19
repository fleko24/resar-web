import { Component, OnInit, OnDestroy } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Propiedad } from 'src/shared/models/propiedad.model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PropiedadService } from 'src/shared/services/propiedad.service';
import { Subscription } from 'rxjs';
import { UploadImgagesComponent } from 'src/app/dialogs/upload-imgages/upload-imgages.component';


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PropiedadesComponent implements OnInit, OnDestroy {

  dataSource = new MatTableDataSource<Propiedad>();
  columnsToDisplay = ['reference', 'tipo', 'operacion', 'direccion', 'titulo'];
  expandedElement: Propiedad | null;
  propiedadesAllSubscription: Subscription;

  constructor( private propiedadService: PropiedadService,
               private dialog: MatDialog ) {
  }

  ngOnInit() {
    this.propiedadesAllSubscription = this.propiedadService.fetchAllSubject.subscribe((propiedades: Propiedad[]) => {
      console.log(propiedades);
      this.dataSource.data = propiedades;
    });
    this.propiedadService.fetchAll();
  }

  /********************************************************************* */
  /**** Open Upload Dialog: Dialog to upload images  ******************* */
  /********************************************************************* */
  openUploadDialog(propiedad: Propiedad) {
    const dialogRef = this.dialog.open(UploadImgagesComponent, {
      width: '350px',
      data: {
        propiedad: propiedad
      }
    });
  }

  ngOnDestroy() {
    if (this.propiedadesAllSubscription) {
      this.propiedadesAllSubscription.unsubscribe();
    }
  }

}
