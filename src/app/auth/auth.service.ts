import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../base/base.service";

@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  login() {
    return this.get("api/users/all");
  }
}
