import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "course";
  number = 18;
  children = ["Tom", "Andrei", "Viktor"];
  build = {
    type: "big",
    width: 100,
    height: 200
  };

  image = {
    path: "assets/img/2.jpg",
    alt: "トリミング　鞍馬天狗"
  };

  inputValue: string;
  event = "none";
  wayInput = "initial";
  toggleStyle = false;
  toggleClass = false;
  toggleClassSecond = false;
  selectValue: string;
  now = new Date();

  constructor() {
    setTimeout(() => {
      this.image = {
        path: "assets/img/1.jpg",
        alt: "Toshusai_Sharaku-_Otani_Oniji,_1794"
      };
    }, 5000);
  }

  onBlur(str: string) {
    this.inputValue = str;
    this.event = "BLUR";
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
    this.event = "keyup.enter";
  }
}
