import { Component, OnInit } from "@angular/core";

export interface Post {
  title: string;
  text: string;
  id?: number | string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  posts: Post[] = Array(4)
    .fill({
      title: "qui eum cupiditate corporis id magnam vitae non dolores.",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ducimus praesentium atque incidunt inventore cupiditate aliquid? Delectus minus in, quidem, modi qui eum cupiditate corporis id magnam vitae non dolores."
    })
    .map(post => ({ ...post, id: Math.random() * 100 }));

  ngOnInit() {
    setTimeout(() => {
      this.posts[0] = {
        title: "changed",
        text: "changed text",
        id: 555555
      };
    }, 5000);
  }

  handleUpdatePost(post: Post) {
    this.posts.unshift(post);
  }

  handleRemove(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
