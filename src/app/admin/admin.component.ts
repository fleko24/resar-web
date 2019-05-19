import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropiedadService } from 'src/shared/services/propiedad.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  selectedTab: number;
  tabChangedSubscription: Subscription;

  constructor( private propiedadService: PropiedadService ) {
  }

  ngOnInit() {
    this.tabChangedSubscription = this.propiedadService.tabChanged.subscribe( (tab: number) => {
      this.selectedTab = tab;
     });
  }

  ngOnDestroy() {
    if (this.tabChangedSubscription) {
      this.tabChangedSubscription.unsubscribe();
    }
  }
}
