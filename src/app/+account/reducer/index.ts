import * as CounterActions from '../action';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

export type Action = CounterActions.Actions;

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case CounterActions.INCREMENT: {
      return {
        count: state.count + 1
      };
    }

    case CounterActions.DECREMENT: {
      return {
        count: state.count - 1
      };
    }

    case CounterActions.RESET: {
      return {
        count: action.payload // typed to number
      };
    }

    default: {
      return state;
    }
  }
}
