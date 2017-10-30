import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as actions from './core.actions';

export interface CoreState {
  language: string;
  theme: string;
}

export const initialCoreState: CoreState = {
  language: null,
  theme: null
};

export function CoreStateReducer(state: CoreState = initialCoreState, action: actions.CoreActions): CoreState {
  switch (action.type) {
    case actions.CoreActionTypes.CHANGE_LANGUAGE:
      return Object.assign({}, state, { language: action.payload });
      case actions.CoreActionTypes.CHANGE_THEME:
      return Object.assign({}, state, { theme: action.payload });
    default:
      return state;
  }
}

export const getCoreState = (state: any) => {
  if (state && state.CoreState) { return state.CoreState; } else { return null; }
};

export const getLanguage = createSelector(getCoreState, (state: CoreState) => state.language);

export const getTheme = createSelector(getCoreState, (state: CoreState) => state.theme);
