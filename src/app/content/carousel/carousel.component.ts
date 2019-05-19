import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images =  [
    '../../../assets/img/depto_1.jpg',
    '../../../assets/img/depto_2.jpg',
    '../../../assets/img/depto_3.jpg',
    '../../../assets/img/depto_4.jpg',
    '../../../assets/img/depto_5.jpg'
  ];

  constructor() {

  }

  ngOnInit() {

  }



}
