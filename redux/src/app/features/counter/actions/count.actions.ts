import { Action } from '@ngrx/store';

export const INCREMENT = '[Count] Increment';
export class Increment implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export type All = Increment;
