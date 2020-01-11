import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

import { Hero } from "./models/hero.model";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { heroes: HEROES };
  }

  genId(heroes: Hero[]): number {
    return heroes.length ? Math.max(...heroes.map(h => h.id)) + 1 : 11;
  }
}
