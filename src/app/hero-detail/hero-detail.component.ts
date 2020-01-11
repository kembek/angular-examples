import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../hero.service";
import { Hero } from "../models/hero.model";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["../heroes/heroes.component.scss"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero = null;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(h => (this.hero = h));
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(this.goBack);
  }

  goBack(): void {
    this.location.back();
  }
}
