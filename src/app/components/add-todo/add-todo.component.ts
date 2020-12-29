import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import ITodo from 'src/app/models/ITodo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.styl']
})
export class AddTodoComponent implements OnInit {
  @Output()
  addTodo: EventEmitter<ITodo> = new EventEmitter();

  title = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const todo = {
      id: Math.random() * 10,
      title: this.title,
      completed: false,
    };
    return this.addTodo.emit(todo);
  }

}
