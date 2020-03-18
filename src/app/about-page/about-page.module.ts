import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AboutPageComponent } from "./about-page.component";
import { AboutExtraPageComponent } from "./about-extra-page/about-extra-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AboutPageComponent, AboutExtraPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: AboutPageComponent,
        children: [{ path: "extra", component: AboutExtraPageComponent }]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AboutPageModule {}
