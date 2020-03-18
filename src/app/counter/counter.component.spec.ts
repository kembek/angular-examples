import { CounterComponent } from "./counter.component";
import { FormBuilder } from "@angular/forms";

describe("CounterComponent", () => {
  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent(new FormBuilder());
  });

  it("should increment counter by 1", () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  it("should decrement counter by -1", () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

  xit("should decrement counter by 5", () => {
    // TODO: set 4 for began this number
    component.increment();
    expect(component.counter).toBe(5);
  });

  it("should inceremnt value by event emitter", () => {
    let result = null;

    component.counterEmitter.subscribe(v => (result = v));
    component.increment();

    expect(component.counter).toBe(1);
  });

  it("should decremnt value by event emitter", () => {
    let result = null;

    component.counterEmitter.subscribe(v => (result = v));
    component.decrement();

    expect(component.counter).toBe(-1);
  });

  it("should create form with two controls", () => {
    const controls = ["username", "password"];

    controls.forEach(f => {
      expect(component.counterForm.contains(f)).toBeTruthy();
    });
  });

  it("should mark login as invalid if empty value", () => {
    const control = component.counterForm.get("username");

    control.setValue("");

    expect(control.valid).toBeFalsy();
  });
});
