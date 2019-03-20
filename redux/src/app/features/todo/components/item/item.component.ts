import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TodoItem } from '../../models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() item: TodoItem;
}
