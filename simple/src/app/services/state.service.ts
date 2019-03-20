import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState, CounterState, Todo, TodoState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private todoId = 0;
  private initialState: AppState = {
    todo: {
      todos: new Map()
    },
    counter: {
      count: 0
    }
  };
  private state = new BehaviorSubject<AppState>(this.initialState);
  constructor() { }

  getTodoState(): Observable<TodoState> {
    return this.state.asObservable().pipe(map(x => x.todo));
  }

  getCounterState(): Observable<CounterState> {
    return this.state.asObservable().pipe(map(x => x.counter));
  }

  addTodo(text: string) {
    const todo: Todo = {
      id: this.todoId++,
      text
    };

    const currentState = this.state.getValue();
    const updatedTodos = currentState.todo.todos.set(todo.id, todo);
    const nextTodoState: TodoState = {
      todos: updatedTodos
    };
    const nextState = {
      ...currentState,
      todo: nextTodoState
    };

    this.state.next(nextState);
  }

  removeTodo(id: number) {
    const state = this.state.getValue();
    state.todo.todos.delete(id);
    this.state.next(state);
  }

  incrementCount() {
    const currentState = this.state.getValue();
    const currentCount = currentState.counter.count;
    const nextCounterState: CounterState = {
      count: currentCount + 1
    };
    const nextState = {
      ...currentState,
      counter: nextCounterState
    };

    this.state.next(nextState);
  }
}


