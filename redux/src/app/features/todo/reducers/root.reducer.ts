import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromItems from './items.reducer';

import { TodoItem } from '../models';

export interface TodoState {
  items: fromItems.State;
}

export interface State {
  todo: TodoState;
}

export const reducers: ActionReducerMap<TodoState> = {
  items: fromItems.reducer
};

export const _selectTodoState = createFeatureSelector<TodoState>('todo');
const _selectItems = createSelector(_selectTodoState, state => state.items);

export const { selectAll: _selectAllItems } = fromItems.adapter.getSelectors(_selectItems);
export const _selectTodoItems = createSelector(_selectAllItems, entities => entities.map(entity => entity as TodoItem));

const todoSelectors = {
  todoItems: _selectTodoItems
};

export default todoSelectors;
