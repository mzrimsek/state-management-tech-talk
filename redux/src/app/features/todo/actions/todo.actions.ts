import { Action } from '@ngrx/store';

export const ADD_TODO = '[Todo] Add Todo';
export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public text: string) { }
}

export const REMOVE_TODO = '[Todo] Remove Todo';
export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public id: number) { }
}

export type All = AddTodo | RemoveTodo;
