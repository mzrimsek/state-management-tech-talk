import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCount from './count.reducer';

export interface CounterState {
  count: fromCount.State;
}

export const reducers: ActionReducerMap<CounterState> = {
  count: fromCount.reducer
};

export const _selectCounterState = createFeatureSelector<CounterState>('counter');
export const _selectCount = createSelector(_selectCounterState, state => state.count);

export const _selectCurrentCount = createSelector(_selectCount, count => count.count);

const counterSelectors = {
  count: _selectCurrentCount
};

export default counterSelectors;
