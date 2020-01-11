import { Component } from "@angular/core";
import { Observable } from "rxjs";

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  e: number = Math.E;

  str: string = "hello world";

  date: Date = new Date();

  float: number = 0.55;

  search: string = "";

  field: string = "title";

  promise: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
      resolve("Promise result");
    }, 4000);
  });

  date$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  obj = {
    a: 1,
    b: [2, 3, 4],
    c: {
      d: 5,
      e: {
        j: {
          s: 6,
          w: 7
        }
      }
    }
  };

  num: number = 3;

  posts: Post[] = [
    {
      title: "post one",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, enim!"
    },
    {
      title: "post second",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, enim!"
    },
    {
      title: "post third",
      text: "фыпф фпвы asdg adsgjar"
    }
  ];

  addPost() {
    this.posts.unshift({
      title: "Beknazar",
      text: "Hello my name is Beknazar"
    });
  }
}
