import { Action } from '@ngrx/store';

import { Talk } from './talk.state';

export const TalkActionTypes = {
  ADD_TALK: '[Talk] Add Talk',
  ADD_TALK_SUCCESS: '[Talk] Add Talk Success',
  ADD_TALK_FAILURE: '[Talk] Add Talk Failure',
  REMOVE_TALK: '[Talk] Remove Talk',
  REMOVE_TALK_SUCCESS: '[Talk] Remove Talk Success',
  REMOVE_TALK_FAILURE: '[Talk] Remove Talk Failure',
  UPDATE_TALK: '[Talk] Update Talk',
  UPDATE_TALK_SUCCESS: '[Talk] Update Talk Success',
  UPDATE_TALK_FAILURE: '[Talk] Update Talk Failure',
  SELECT_TALK: '[Talk] Select Talk'
};

export class AddTalkAction implements Action { type = TalkActionTypes.ADD_TALK; constructor(public payload: Talk) {}}
export class AddTalkSuccessAction implements Action { type = TalkActionTypes.ADD_TALK_SUCCESS; constructor(public payload: Talk) {}}
export class AddTalkFailureAction implements Action { type = TalkActionTypes.ADD_TALK_FAILURE; constructor(public payload: Talk) {}}


export class RemoveTalkAction implements Action { type = TalkActionTypes.REMOVE_TALK; constructor(public payload: Talk) {}}
export class RemoveTalkSuccessAction implements Action { type = TalkActionTypes.REMOVE_TALK_SUCCESS; constructor(public payload: Talk) {}}
export class RemoveTalkFailureAction implements Action { type = TalkActionTypes.REMOVE_TALK_FAILURE; constructor(public payload: Talk) {}}

export class UpdateTalkAction implements Action { type = TalkActionTypes.UPDATE_TALK; constructor(public payload: Talk) {}}
export class UpdateTalkSuccessAction implements Action { type = TalkActionTypes.UPDATE_TALK_SUCCESS; constructor(public payload: Talk) {}}
export class UpdateTalkFailureAction implements Action { type = TalkActionTypes.UPDATE_TALK_FAILURE; constructor(public payload: Talk) {}}

export class SelectTalkAction implements Action {
  type = TalkActionTypes.SELECT_TALK;
  constructor(public payload: Talk) {}
}

export type TalkActions = AddTalkAction | AddTalkSuccessAction | AddTalkFailureAction
| RemoveTalkAction | RemoveTalkSuccessAction | RemoveTalkFailureAction
| UpdateTalkAction | UpdateTalkSuccessAction | UpdateTalkFailureAction | SelectTalkAction;
