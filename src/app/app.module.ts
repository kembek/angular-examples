import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";
import { PostsComponent } from "./posts/posts.component";

@NgModule({
  declarations: [AppComponent, CounterComponent, PostsComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
