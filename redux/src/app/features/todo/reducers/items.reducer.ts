import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as actions from '../actions/todo.actions';

let id = 0;
export interface TodoEntity {
  id: number;
  text: string;
}

export interface State extends EntityState<TodoEntity> { }

export const adapter: EntityAdapter<TodoEntity> = createEntityAdapter<TodoEntity>();
const initialState: State = adapter.getInitialState();

export function reducer(state = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ADD_TODO: {
      const newTodo: TodoEntity = {
        id: id++,
        text: action.text
      };
      return adapter.addOne(newTodo, state);
    }
    case actions.REMOVE_TODO: {
      return adapter.removeOne(action.id, state);
    }
    default: {
      return state;
    }
  }
}
