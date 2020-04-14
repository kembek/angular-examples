import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

export interface IConfig {
  apiUrl: string;
  authUrl: string;
}

@Injectable({ providedIn: "root" })
export class ConfigurationService {
  private readonly CONFIG_URL = "assets/config/config.json";
  private configuration$: Observable<IConfig>;

  constructor(private http: HttpClient) {}

  public loadConfig(): Observable<IConfig> {
    if (!this.configuration$) {
      this.configuration$ = this.http
        .get<IConfig>(this.CONFIG_URL)
        .pipe(shareReplay(1));
    }
    return this.configuration$;
  }
}
