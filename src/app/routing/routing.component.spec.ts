import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RoutingComponent } from "./routing.component";
import { Params, Router, ActivatedRoute, RouterOutlet } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Subject } from "rxjs";
import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";

class RouterStub {
  navigate(paths: any[]) {}
}

class ActivatedRouteStub {
  private route: Subject<Params> = new Subject();

  push(params: Params) {
    this.route.next(params);
  }

  get params() {
    return this.route.asObservable();
  }
}

describe("RoutingComponent", () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be definded", () => {
    expect(component).toBeDefined();
  });

  it("should navigate to posts if go back", () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");

    component.goBack();

    expect(spy).toHaveBeenCalledWith(["/posts"]);
  });

  it("should redirect to 404 page if id equal zero", () => {
    let router = TestBed.get(Router);
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    let spy = spyOn(router, "navigate");

    route.push({ id: "0" });

    expect(spy).toHaveBeenCalledWith(["/404"]);
  });

  it("should have router-outlet directive", () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });
});
