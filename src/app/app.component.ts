import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  regForm: FormGroup;

  ngOnInit() {
    this.regForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  submit() {
    const regFormData = this.regForm.value;

    console.log("RegForm", this.regForm);
    console.log("RegForm data", regFormData);
  }
}
