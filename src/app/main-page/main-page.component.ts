import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.pug",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  title = "ng-pug";
  userName = "lol";

  constructor() {}

  ngOnInit() {}

  handleClick(gender) {
    alert(`Click ${this.userName} gender ${gender}`);
  }
}
