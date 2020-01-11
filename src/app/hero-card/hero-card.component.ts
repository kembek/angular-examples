import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {
  
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
