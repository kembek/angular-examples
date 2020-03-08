import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Todo, TodoService } from "./todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle: string = "";
  isLoad = false;
  errorString = "";

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  handleClickAddTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.todoTitle = "";
    });
  }

  handleClickDownloadTodos() {
    this.fetchTodos();
  }

  handleClickDeleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    });
  }

  handleClickCompleteTodo(todoId: number) {
    this.todoService.completeTodo(todoId).subscribe(todo => {
      this.todos.find(todoFound => todoFound.id === todo.id).completed = true;
    });
  }

  fetchTodos() {
    this.isLoad = true;
    this.todoService.fetchTodos().subscribe(
      todos => {
        this.todos = todos;
        this.isLoad = false;
      },
      (error: HttpErrorResponse) => {
        this.errorString = error.message;
      }
    );
  }
}
