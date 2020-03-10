import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PostsService, Post } from "../posts.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post = this.postsService.getById(+params.id);
    });
  }

  loadPost() {
    this.router.navigate(["/posts", 44]);
  }
}
