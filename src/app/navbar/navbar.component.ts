import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoading = false;
  isAuthenticated = false;
  button = 'Log In';

  constructor( private router: Router ) { }

  ngOnInit() {
    if (this.isAuthenticated) {
      this.button = 'Log Out';
    } else {
      this.button = 'Log In';
    }
  }

  onClickLog() {
    if(this.isAuthenticated) {
      this.isAuthenticated = false;
      this.button = 'Log In';
      this.router.navigate(['']);
    } else {
      this.isAuthenticated = true;
      this.button = 'Log Out';
    }
  }

  onClickPropiedades() {
    this.router.navigate(['/admin-resar']);
  }


}
