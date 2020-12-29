import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ITodo from 'src/app/models/ITodo';
import { HttpTodosService } from 'src/app/services/http-todos.service';

interface ISetClasses {
  [key: string]: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.styl']
})

export class TodoItemComponent implements OnInit {
  @Input()
  todo!: ITodo;

  @Output()
  deleteTodo: EventEmitter<ITodo> = new EventEmitter();

  constructor(private httpTodoService: HttpTodosService) { }

  ngOnInit(): void {
  }

  setClasses(): ISetClasses {
    const classes = {
      todo: true,
      'is-completed': this.todo.completed
    };
    return classes;
  }

  onToggle(todo: ITodo): void {
    todo.completed = !todo.completed;
    this.httpTodoService.toggleTodo(todo).subscribe(response => response);
  }

  onDelete(todo: ITodo): void {
    this.deleteTodo.emit(todo);
  }
}
