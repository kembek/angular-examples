import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BaseModule } from "./base/base.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule.forRoot("https://jsonplaceholder.typicode.com/"),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
