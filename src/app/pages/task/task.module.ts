import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task.component";

import { TaskRoutingModule } from "./task-routing.module";
import { AuthModule } from "src/app/auth/auth.module";

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, TaskRoutingModule, AuthModule],
})
export class TaskModule {}
