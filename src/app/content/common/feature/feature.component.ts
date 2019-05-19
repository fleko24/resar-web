import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() icon: string;
  @Input() feature: string;
  @Input() cant: number;
  @Input() suffix: string;

  constructor() { }

  ngOnInit() {
  }

}
