import { Component } from "@angular/core";

import { AppCounterService } from "../services/counter.service";
import { SndCounterService } from "../services/snd-counter.service";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
  providers: [SndCounterService]
})
export class CounterComponent {
  constructor(
    private appCounterService: AppCounterService,
    private appSndCounterService: SndCounterService
  ) {}
}
