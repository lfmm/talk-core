
import { Action } from '@ngrx/store';

export const CoreActionTypes = {
  CHANGE_LANGUAGE: '[Core] Change Language',
  CHANGE_THEME: '[Core] Change Theme'
};

export class ChangeLanguageAction implements Action {
  type = CoreActionTypes.CHANGE_LANGUAGE;
  constructor(public payload: string) {}
}

export class ChangeThemeAction implements Action {
  type = CoreActionTypes.CHANGE_THEME;
  constructor(public payload: string) {}
}

export type CoreActions = ChangeLanguageAction | ChangeThemeAction;
