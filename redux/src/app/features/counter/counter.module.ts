import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { CounterComponent } from './counter.component';

import { reducers } from './reducers/root.reducer';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', reducers)
  ]
})
export class CounterModule { }
