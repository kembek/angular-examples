import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { MyValidator } from "./custom.validator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  regForm: FormGroup;

  get submitDisabled(): boolean {
    return this.regForm.invalid || this.regForm.pending;
  }

  ngOnInit() {
    this.regForm = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email, MyValidator.restrictedEmails],
        [MyValidator.uniqEmail]
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl("ru"),
        city: new FormControl(
          {
            value: "Москва",
            disabled: true
          },
          [Validators.required]
        )
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.submitDisabled) {
      return;
    }

    const regFormData = this.regForm.value;

    console.log("RegForm", this.regForm);
    console.log("RegForm data", regFormData);

    this.regForm.reset();
  }

  showControlError(controlName: string): boolean {
    const control = this.regForm.get(controlName);

    return control.invalid && control.touched;
  }

  getConrolErrors(controlName: string): { [key: string]: any } {
    const control = this.regForm.get(controlName);

    return control.errors;
  }

  setCapital() {
    const countryMap = {
      ru: "Москва",
      ua: "Киев",
      by: "Минск"
    };

    const countryKey = this.regForm.get("address.country").value;
    const city = countryMap[countryKey];

    this.regForm.patchValue({
      address: { city }
    });
  }

  addSkill() {
    const skillControl = new FormControl("", [Validators.required]);

    (this.regForm.get("skills") as FormArray).push(skillControl);
  }
}
