import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getServiceTodos().subscribe(todos => {
      this.todos = todos;
    });
    // was doing this here
    // this.initTodos();
  }

  initTodos() {
    // At first I was initializing todos here, but now we get our todos from a list
    this.todos = this.todoService.getDummyTodos();
  }

  deleteTodo(todo: Todo) {
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

}
