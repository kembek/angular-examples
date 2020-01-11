import { Component, OnInit } from "@angular/core";

import { HeroService } from "../hero.service";
import { Hero } from "../models/hero.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  topHeroes: Hero[] = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(h => (this.topHeroes = h.slice(0, 4)));
  }
}
