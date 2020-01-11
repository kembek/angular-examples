import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.pug",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  childrenName = ["Luke", "Mandalorian", "Anakin", "Obi Wan", "Yoda"];

  constructor() {}

  ngOnInit() {}
}
