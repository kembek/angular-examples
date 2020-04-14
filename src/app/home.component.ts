import { Component, OnInit } from "@angular/core";
import { ConfigurationService, IConfig } from "./configuration.service";
import { Observable } from "rxjs";

@Component({
  template: `
    <header>
      <h1>
        Get config from assets
      </h1>
      <nav>
        <a routerLink="about">About</a>
      </nav>
    </header>
    <hr />
    <h2>Config</h2>
    <p>{{ $config | async | json }}</p>
  `,
})
export class HomeComponent implements OnInit {
  $config: Observable<IConfig>;

  constructor(private config: ConfigurationService) {}

  ngOnInit() {
    this.$config = this.config.loadConfig();
  }
}
