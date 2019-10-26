import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ name: string; }>()
);

export const gameState = createAction(
  '[Game] Start',
  props<{ start: boolean }>()
);

export const addClick = createAction(
  '[Counter] Add Click'
);

export const resetCounter = createAction(
  '[Counter] Reset'
);
