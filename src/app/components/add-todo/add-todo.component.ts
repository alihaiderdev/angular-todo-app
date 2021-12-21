import { Todo } from './../../Todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  description!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  addTodo() {
    const todo = {
      sno: uuidv4(),
      active: true,
      title: this.title,
      description: this.description,
    };
    this.todoAdd.emit(todo);
  }
}
