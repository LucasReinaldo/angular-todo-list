import { Component, OnInit } from '@angular/core';
import ITodo from 'src/app/models/ITodo';
import { HttpTodosService } from 'src/app/services/http-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.styl']
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private httpTodoService: HttpTodosService) { }

  ngOnInit(): void {
    this.httpTodoService.getFilteredTodos().subscribe(response => this.todos = response);
  }

  deleteTodo(todo: ITodo): void {
    this.todos = this.todos.filter(todoEl => todoEl.id !== todo.id);
    this.httpTodoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: ITodo): void {
    this.httpTodoService.addTodo(todo).subscribe(response => this.todos.push(response));
  }
}
