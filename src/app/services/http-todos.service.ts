import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ITodo from '../models/ITodo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpTodosService {
  private todosPlaceholderUrl: string;
  private todosLimit: string;

  constructor(private http: HttpClient) {
    this.http = http;
    this.todosPlaceholderUrl = 'https://jsonplaceholder.typicode.com/todos';
    this.todosLimit = '?_limit=8';
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosPlaceholderUrl);
  }

  getFilteredTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(
      `${this.todosPlaceholderUrl}${this.todosLimit}`
    );
  }

  toggleTodo(todo: ITodo): Observable<any> {
    const url = `${this.todosPlaceholderUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: ITodo): Observable<ITodo> {
    const url = `${this.todosPlaceholderUrl}/${todo.id}`;
    return this.http.delete<ITodo>(url, httpOptions);
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.todosPlaceholderUrl, todo, httpOptions);
  }
}
