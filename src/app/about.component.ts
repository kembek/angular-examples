import { Component, OnInit } from "@angular/core";
import { AboutService } from "./about.service";

@Component({
  template: `
    <header><a [routerLink]="['/']">Home</a></header>
    <hr />
    <div>
      <h2>Fetch data from service</h2>
      <p style="white-space: pre-wrap;">{{ $data | async | json }}</p>
    </div>
  `,
})
export class AboutComponent implements OnInit {
  $data;

  constructor(public aboutService: AboutService) {}

  ngOnInit() {
    this.$data = this.aboutService.getData();
  }
}
