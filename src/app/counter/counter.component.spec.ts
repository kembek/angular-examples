import { TestBed, ComponentFixture } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";
import { By } from "@angular/platform-browser";

describe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeDefined();
  });

  it("should change the property in the component", () => {
    const count = 42;

    component.counter = count;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css(".counter"));
    let element: HTMLElement = debugElement.nativeElement;

    expect(element.textContent).toContain(count.toString());
  });

  it("should add the green class in the element if count is even number", () => {
    const evenCount = 6;

    component.counter = evenCount;
    fixture.detectChanges();
    let debugElement = fixture.debugElement.query(By.css(".counter"));
    let element: HTMLElement = debugElement.nativeElement;

    expect(element.classList.contains("green")).toBeTruthy();
  });

  it("should change if button clicked", () => {
    let btn = fixture.debugElement.query(By.css("#increment"));
    btn.triggerEventHandler("click", null);

    expect(component.counter).toBe(1);
  });
});
