import { Component } from '@angular/core';

import { AddItemEvent, TodoItem } from './models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  private id = 1;
  private items: Map<number, TodoItem> = new Map();
  constructor() { }

  getItems(): TodoItem[] {
    return Array.from(this.items.values());
  }

  addItem(event: AddItemEvent) {
    const item = {
      id: this.id++,
      text: event.text
    };
    this.items.set(item.id, item);
  }

  removeTodo(id: number) {
    this.items.delete(id);
  }
}
