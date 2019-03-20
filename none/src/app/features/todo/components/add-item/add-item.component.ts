import { Component, EventEmitter, Output } from '@angular/core';

import { AddItemEvent } from '../../models';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  @Output() addItem: EventEmitter<AddItemEvent> = new EventEmitter();
  constructor() { }

  emitAddItem(textInput: HTMLInputElement) {
    const text = textInput.value;
    textInput.value = '';
    this.addItem.emit({ text });
  }
}
