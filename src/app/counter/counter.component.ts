import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-counter",
  template: `
    <p>Counter: {{ counter }}</p>
    <div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `
})
export class CounterComponent {
  counter = 0;
  counterForm: FormGroup;

  @Output() counterEmitter = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
    this.counterForm = this.fb.group({
      username: this.fb.control("", [Validators.required]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  decrement() {
    --this.counter;
    this.counterEmitter.emit(this.counter);
  }

  increment() {
    ++this.counter;
    this.counterEmitter.emit(this.counter);
  }
}
