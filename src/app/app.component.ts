import { Component } from "@angular/core";

import { AppCounterService } from "./services/counter.service";
import { SndCounterService } from "./services/snd-counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [SndCounterService]
})
export class AppComponent {
  constructor(
    private appCounterService: AppCounterService,
    private appSndCounterService: SndCounterService
  ) {}
}
