import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as CounterActions from '../action';

const initialState = 0;

export type Action = CounterActions.Actions;

export function reducer(state: number = initialState, action: Action): number {
  switch (action.type) {
    case CounterActions.INCREMENT: {
      return state + 1;
    }

    case CounterActions.DECREMENT: {
      return state - 1;

    }

    case CounterActions.RESET: {
      return action.payload; // typed to number
    }

    default: {
      return state;
    }
  }
}

// export reducer
export const selectFeature = createFeatureSelector<number>('count');

export const selectFeatureCount = createSelector(selectFeature, (state: number) => state);
