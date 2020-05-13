import { Injectable, Injector } from "@angular/core";
import { BaseService } from "src/app/base/base.service";

@Injectable({
  providedIn: "root",
})
export class UserService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getUser() {
    this.get("users");
  }
}
