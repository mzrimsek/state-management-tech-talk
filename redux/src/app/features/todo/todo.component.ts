import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as todoActions from './actions/todo.actions';

import todoSelectors, { TodoState } from './reducers/root.reducer';

import { AddItemEvent, TodoItem } from './models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  items$: Observable<TodoItem[]>;
  constructor(private store: Store<TodoState>) {
    this.items$ = this.store.select(todoSelectors.todoItems);
  }

  addItem(event: AddItemEvent) {
    this.store.dispatch(new todoActions.AddTodo(event.text));
  }

  removeItem(id: number) {
    this.store.dispatch(new todoActions.RemoveTodo(id));
  }
}
