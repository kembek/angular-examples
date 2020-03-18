import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "about",
    loadChildren: () =>
      import("./about-page/about-page.module").then(m => m.AboutPageModule)
  },
  { path: "", component: HomePageComponent, pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
