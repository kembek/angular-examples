import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StyleDirective } from "./directives/style.directive";
import { IfNotDirective } from './directives/if-not.directive';

@NgModule({
  declarations: [AppComponent, StyleDirective, IfNotDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
