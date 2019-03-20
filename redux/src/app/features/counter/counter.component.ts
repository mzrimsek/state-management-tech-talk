import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as countActions from './actions/count.actions';

import counterSelectors, { CounterState } from './reducers/root.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$: Observable<number>;
  constructor(private store: Store<CounterState>) {
    this.count$ = this.store.select(counterSelectors.count);
  }

  increment() {
    this.store.dispatch(new countActions.Increment());
  }
}
