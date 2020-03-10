import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { AboutComponent } from "./about/about.component";
import { PostComponent } from "./post/post.component";
import { AboutExtraComponent } from "./about-extra/about-extra.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    component: AboutComponent,
    children: [
      {
        path: "extra",
        component: AboutExtraComponent
      }
    ]
  },
  { path: "posts", component: PostsComponent },
  { path: "posts/:id", component: PostComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
