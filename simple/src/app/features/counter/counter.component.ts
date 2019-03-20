import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$: Observable<number>;
  constructor(private stateService: StateService) {
    this.count$ = this.stateService.getCounterState().pipe(map(x => x.count));
  }

  increment() {
    this.stateService.incrementCount();
  }
}
