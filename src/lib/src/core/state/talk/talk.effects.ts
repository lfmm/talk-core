import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import * as TalkActions from './talk.actions';

import { TalkState, Talk } from './talk.state';

@Injectable()
export class TalkEffects {

  @Effect({ dispatch: false })
  addTalk$ = this.actions$.ofType(TalkActions.TalkActionTypes.ADD_TALK)
    .map((action: TalkActions.AddTalkAction) => action.payload)
    .do((talk) => {
      console.log('sending to hub (addTalk)', talk);
      this._store.dispatch(new TalkActions.AddTalkSuccessAction(talk));
    });

  @Effect({ dispatch: false })
  removeTalk$ = this.actions$.ofType(TalkActions.TalkActionTypes.REMOVE_TALK)
    .map((action: TalkActions.RemoveTalkAction) => action.payload)
    .do((talk) => {
      console.log('sending to hub (removeTalk)', talk);
      this._store.dispatch(new TalkActions.RemoveTalkSuccessAction(talk));
    });

  @Effect({ dispatch: false })
  updateTalk$ = this.actions$.ofType(TalkActions.TalkActionTypes.UPDATE_TALK)
    .map((action: TalkActions.UpdateTalkAction) => action.payload)
    .do((talk) => {
      console.log('sending to hub (updateTalk)', talk);
      this._store.dispatch(new TalkActions.UpdateTalkSuccessAction(talk));
    });

  constructor(
    private actions$: Actions,
    private _store: Store<TalkState>
  ) {}

}
