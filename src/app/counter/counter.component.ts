import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    Counter: {{ counter }}
  `
})
export class CounterComponent {
  counter = 0;

  decrement() {
    this.counter = --this.counter;
  }

  increment() {
    this.counter = ++this.counter;
  }
}
