import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as actions from './talk.actions';

export interface Talk {
  id: string;
  what: string;
  who: string;
  when: Date;
}

export interface TalkState {
  talk: Talk;
  talks: Talk[];
}

export const initialTalkState: TalkState = {
  talk: null,
  talks: []
};

export function TalkStateReducer(state: TalkState = initialTalkState, action: actions.TalkActions): TalkState {
  switch (action.type) {
    case actions.TalkActionTypes.ADD_TALK_SUCCESS:
      const s: TalkState = Object.assign({}, state);
      s.talks = [...s.talks, action.payload];
      return s;
    case actions.TalkActionTypes.REMOVE_TALK_SUCCESS:
      const z: TalkState = Object.assign({}, state);
      z.talks = state.talks.filter(t => t.id !== action.payload.id);
      return z;
    case actions.TalkActionTypes.UPDATE_TALK_SUCCESS:
      const f: TalkState = Object.assign({}, state);
      f.talks = [...state.talks.filter(t => t.id !== action.payload.id), action.payload];
      return f;
    case actions.TalkActionTypes.SELECT_TALK:
      const g: TalkState = Object.assign({}, state, { talk: action.payload });
      return g;
    default:
      return state;
  }
}

export const getTalkState = (state: any) => {
  if (state && state.TalkState) { return state.TalkState; } else { return null; }
};

export const getTalk = createSelector(getTalkState, (state: TalkState) => state.talk);

export const getTalks = createSelector(getTalkState, (state: TalkState) => state.talks);
