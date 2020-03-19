import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RoutingComponent } from "./routing.component";
import { RouterModule } from "@angular/router";

describe("RoutingComponent", () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      imports: [RouterModule.forRoot([])]
    });

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
  });

  it("should be definded", () => {
    expect(component).toBeDefined();
  });
});
