import { ColorDirective } from "./color.directive";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, Host } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <p appColor="yellow">Some</p>
    <p appColor>Some 2</p>
  `
})
class HostComponent {}

describe("ColorDirective", () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective, HostComponent]
    });

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it("should create an instance", () => {
    const directive = new ColorDirective(null);
    expect(directive).toBeTruthy();
  });

  it("should apply the yellow background", () => {
    const debugElement = fixture.debugElement.queryAll(By.css("p"))[0];

    expect(debugElement.nativeElement.style.backgroundColor).toBe("yellow");
  });

  it("should apply the blue background", () => {
    const debugElement = fixture.debugElement.queryAll(By.css("p"))[1];

    let directive = debugElement.injector.get(ColorDirective);

    expect(debugElement.nativeElement.style.backgroundColor).toBe(
      directive.defaultColor
    );
  });
});
