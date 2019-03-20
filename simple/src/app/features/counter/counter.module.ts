import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterComponent } from './counter.component';

import { StateService } from 'src/app/services/state.service';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule
  ],
  providers: [StateService]
})
export class CounterModule { }
