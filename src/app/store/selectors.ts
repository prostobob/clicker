import { createSelector } from '@ngrx/store';
import { ClickerState } from './state';

export interface AppState {
    clicker: ClickerState;
  }

export const selectFeature = (state: AppState) => state.clicker;

export const selectName = createSelector(
    selectFeature,
    (state: ClickerState) => state.name
);

export const selectStateGame = createSelector(
    selectFeature,
    (state: ClickerState) => state.startGame
);

export const selectCounter = createSelector(
    selectFeature,
    (state: ClickerState) => state.counter
);
