
export interface AppState {
  todo: TodoState;
  counter: CounterState;
}

export interface TodoState {
  todos: Map<number, Todo>;
}

export interface Todo {
  id: number;
  text: string;
}

export interface CounterState {
  count: number;
}
