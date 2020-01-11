import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "login",
    component: LoginFormComponent
  },
  {
    path: "",
    component: MainPageComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
