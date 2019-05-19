import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Propiedad } from '../models/propiedad.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class PropiedadService {

  tabChanged = new Subject<number>();        // usado para cambiar las tabs
  fetchAllSubject = new Subject<Propiedad[]>();
  fetchByIdSubject = new Subject<Propiedad>();

  constructor( private db: AngularFirestore ) {}

  /*******************************************************************/
  /************************ CREATE  **********************************/
  /*******************************************************************/
  create(p: Propiedad) {
    console.log('creating propiedad....');
    return this.db.collection<Propiedad>('propiedades').add(p);
  }
  /*******************************************************************/
  /************************ fetchAll   *******************************/
  /*******************************************************************/
  fetchAll() {
    console.log('fetching all properties...');
    return this.db
      .collection<Propiedad>('propiedades')
      .snapshotChanges()
      .pipe( map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })).subscribe((propiedades: Propiedad[]) => {
        this.fetchAllSubject.next(propiedades);
      });

  }
/*******************************************************************/
/************************ fetchById   *******************************/
/*******************************************************************/
  fetchById(id: string) {
    return this.db.doc<Propiedad>('propiedades/' + id).valueChanges().subscribe((propiedad: Propiedad) => {
      this.fetchByIdSubject.next({id, ...propiedad});
    });
  }
/*******************************************************************/
/************************ update   *********************************/
/*******************************************************************/
  update(id: string, p: Partial<Propiedad>) {
   return this.db.doc<Propiedad>('propiedades/' + id).update(p);
  }
/*******************************************************************/
/**************delete main_img  *********************************/
/*******************************************************************/
}
