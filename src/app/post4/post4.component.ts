import { Component } from "@angular/core";

@Component({
  selector: "app-post4",
  template: `
    <div class="post post--fourth">
      <h2>Post fourth</h2>
      <p>lorem lorem</p>
    </div>
  `,
  styles: [
    `
      .post {
        padding: 5px;
        width: 400px;
        margin: 0 auto;
        margin-top: 5px;
        min-height: 100px;
      }

      .post--fourth {
        background-color: green;
      }
    `
  ]
})
export class Post4Component {}
