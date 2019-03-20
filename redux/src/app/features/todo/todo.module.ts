import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { TodoComponent } from './todo.component';

import { reducers } from './reducers/root.reducer';

@NgModule({
  declarations: [TodoComponent, ItemComponent, AddItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', reducers)
  ]
})
export class TodoModule { }
