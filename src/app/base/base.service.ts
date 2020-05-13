import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "./tokens";

@Injectable()
export class BaseService {
  http: HttpClient;
  api: string;

  constructor(private injector: Injector) {
    this.http = this.injector.get(HttpClient);
    this.api = this.injector.get(API_URL);
  }

  protected get(url: string) {
    return this.http.get(url);
  }
}
