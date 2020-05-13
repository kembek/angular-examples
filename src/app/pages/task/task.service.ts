import { Injectable, Injector } from "@angular/core";
import { BaseService } from "src/app/base/base.service";

@Injectable({
  providedIn: "root",
})
export class TaskService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getTask() {
    return this.get("todos");
  }
}
