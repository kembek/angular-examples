import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";
import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";

describe("PostsComponent", () => {
  let fixture: ComponentFixture<PostsComponent>;
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [HttpClientModule],
      providers: [PostsService]
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PostsService);
  });

  xit("should call fetch in the ngOnInit lificycle hook", () => {
    const posts = [1, 2, 3, 4, 5];

    spyOn(service, "fetch").and.returnValue(of(posts));

    fixture.detectChanges();

    expect(component.posts).toEqual(posts);
  });

  it("should call fetch in the ngOnInit lificycle hook (promise)", async(() => {
    const posts = [1, 2, 3, 4, 5];

    spyOn(service, "fetchPromise").and.returnValue(Promise.resolve(posts));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.posts).toEqual(posts);
    });
  }));

  xit("should call fetch in the ngOnInit lificycle hook (promise) second variant", fakeAsync(() => {
    const posts = [1, 2, 3, 4, 5];

    spyOn(service, "fetchPromise").and.returnValue(Promise.resolve(posts));

    fixture.detectChanges();

    tick();

    expect(component.posts).toEqual(posts);
  }));
});
