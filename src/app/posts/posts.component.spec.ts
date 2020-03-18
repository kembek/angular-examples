import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";
import { EMPTY, of, throwError } from "rxjs";

describe("PostsComponent", () => {
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService(null);
    component = new PostsComponent(service);
  });

  it("should call fetch method when ngOnInit", () => {
    const spy = spyOn(service, "fetch").and.returnValue(EMPTY);

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it("should update posts length after ngOnInit", () => {
    const posts = [1, 2, 3, 4];
    spyOn(service, "fetch").and.callFake(() => of(posts));

    component.ngOnInit();

    expect(component.posts.length).toBe(posts.length);
  });

  it("should add a new post", () => {
    const post = { title: "test" };
    const spy = spyOn(service, "create").and.returnValue(of(post));

    component.add(post.title);

    expect(spy).toHaveBeenCalled();
    expect(component.posts.length).toBe(1);
  });

  it("should return the error message", () => {
    const errorMessage = "Error message";
    spyOn(service, "create").and.returnValue(throwError(errorMessage));

    component.add("post title");

    expect(component.message).toBe(errorMessage);
  });

  it("should remove a post if user confirms", () => {
    const spy = spyOn(service, "remove").and.returnValue(EMPTY);
    spyOn(window, "confirm").and.returnValue(true);

    component.delete(10);
    expect(spy).toHaveBeenCalledWith(10);
  });

  it("shoud NOT remove a post if user not confirms", () => {
    const spy = spyOn(service, "remove").and.returnValue(EMPTY);
    spyOn(window, "confirm").and.returnValue(false);

    component.delete(10);

    expect(spy).not.toHaveBeenCalled();
  });
});
