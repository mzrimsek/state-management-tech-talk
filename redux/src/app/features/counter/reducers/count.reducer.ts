import * as actions from '../actions/count.actions';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.INCREMENT: {
      return {
        count: state.count + 1
      };
    }
    default: {
      return state;
    }
  }
}
