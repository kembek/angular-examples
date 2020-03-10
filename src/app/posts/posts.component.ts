import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  showId = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.showId = !!params.showId;
    });

    this.activatedRoute.fragment.subscribe(fragment => {
      console.log("Fragment", fragment);
    });
  }

  programRoute() {
    this.router.navigate(["/posts"], {
      queryParams: {
        showId: true
      },
      fragment: "fragment-program"
    });
  }
}
