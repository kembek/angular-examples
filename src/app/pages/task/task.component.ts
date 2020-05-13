import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { TaskService } from "./task.service";

@Component({
  selector: "app-task",
  template: `
    <p>
      task works!
    </p>
  `,
  styles: [],
})
export class TaskComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.authService.login().subscribe();
    this.taskService.getTask().subscribe();
  }
}
