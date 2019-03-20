import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { TodoComponent } from './todo.component';

import { StateService } from 'src/app/services/state.service';

@NgModule({
  declarations: [TodoComponent, ItemComponent, AddItemComponent],
  imports: [
    CommonModule
  ],
  providers: [StateService]
})
export class TodoModule { }
