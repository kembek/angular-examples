import { Injectable } from "@angular/core";

@Injectable()
export class SndCounterService {
  counter = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
