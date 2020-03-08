import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

export interface Todo {
  title: string;
  completed: boolean;
  id?: number | string;
}

type observe = "response" | "body" | "events";
type responseType = "arraybuffer" | "blob" | "text" | "json";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodo(newTodo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      MyCustomHeader: "foo-bar",
      CurrentLanguage: "en"
    });

    return this.http
      .post<Todo>("https://jsonplaceholder.typicode.com/todos", newTodo, {
        headers
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.warn("***Error message", error.message);
          return throwError(error);
        })
      );
  }

  deleteTodo(todoId: number): Observable<any> {
    const observe: observe = "events";

    return this.http
      .delete<void>(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        observe
      })
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent) {
            console.log("sent", event);
          }

          if (event.type === HttpEventType.Response) {
            console.log("Response", event);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.warn("***Error message", error.message);
          return throwError(error);
        })
      );
  }

  fetchTodos(): Observable<Todo[]> {
    const params = new HttpParams().set("_limit", "2").set("some", "value");
    const observe: observe = "response";

    return this.http
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
        params,
        observe
      })
      .pipe(
        map(response => {
          console.log("Response", response);
          return response.body;
        }),
        catchError((error: HttpErrorResponse) => {
          console.warn("***Error message", error.message);
          return throwError(error);
        })
      );
  }

  completeTodo(todoId: number): Observable<Todo> {
    const responseType: responseType = "text";

    return this.http
      .put<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          completed: true
        },
        {
          responseType
        }
      )
      .pipe(
        map(response => {
          console.log(response);
          return JSON.parse(response);
        }),
        catchError((error: HttpErrorResponse) => {
          console.warn("***Error message", error.message);
          return throwError(error);
        })
      );
  }
}
