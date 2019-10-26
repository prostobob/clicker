import { Action, createReducer, on } from '@ngrx/store';
import * as ClickerActions from './actions';
import { initialState, ClickerState } from './state';

const clickerReducer = createReducer(
  initialState,
  on(ClickerActions.login, (state, { name }) => ({
    ...state,
    name
  })),
  on(ClickerActions.gameState, (state, { start }) => ({
    ...state,
    startGame: start
  })),
  on(ClickerActions.addClick, (state) => ({
    ...state,
    counter: state.counter + 1
  })),
  on(ClickerActions.resetCounter, (state) => ({
    ...state,
    counter: 0
  }))
);

export function reducer(state: ClickerState | undefined, action: Action) {
  return clickerReducer(state, action);
}
