import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { Propiedad } from 'src/shared/models/propiedad.model';
import { PropiedadService } from 'src/shared/services/propiedad.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, OnDestroy {

  propiedad$: Observable<Propiedad>;
  fetchByIdSubscription: Subscription;

  constructor( private route: ActivatedRoute,
               private propiedadService: PropiedadService
             ) { }

  ngOnInit() {
    this.fetchByIdSubscription = this.propiedadService.fetchByIdSubject.subscribe( (propiedad: Propiedad) => {
      if (propiedad) {
        this.propiedad$ = of(propiedad);
      } else {
        console.log('ERROR, PROPIEDAD NO EXISTE');
      }

    });
    this.propiedadService.fetchById(this.route.snapshot.paramMap.get('id'));
  }

  ngOnDestroy() {
    if(this.fetchByIdSubscription) {
      this.fetchByIdSubscription.unsubscribe();
    }
  }
}
