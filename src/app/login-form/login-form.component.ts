import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.pug",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  userName = "Luke";

  constructor() {}

  ngOnInit() {}

  handleTitleClick() {
    console.log("log");
  }
}
