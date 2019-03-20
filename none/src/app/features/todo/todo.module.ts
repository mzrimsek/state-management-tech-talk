import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent, ItemComponent, AddItemComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
