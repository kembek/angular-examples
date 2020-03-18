import { CounterComponent } from "./counter.component";

describe("CounterComponent", () => {
  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent();
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
});
