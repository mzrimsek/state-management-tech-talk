import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StateService } from 'src/app/services/state.service';

import { AddItemEvent, TodoItem } from './models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  items$: Observable<TodoItem[]>;
  constructor(private stateService: StateService) {
    this.items$ = this.stateService.getTodoState().pipe(map(x => Array.from(x.todos.values())));
  }

  addItem(event: AddItemEvent) {
    this.stateService.addTodo(event.text);
  }

  removeTodo(id: number) {
    this.stateService.removeTodo(id);
  }
}
