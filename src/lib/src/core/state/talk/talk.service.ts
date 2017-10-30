import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { TalkState, Talk, getTalk, getTalks } from './talk.state';
import * as actions from './talk.actions';

@Injectable()
export class TalkService {

  public get talk(): Observable<Talk> { return this._store.select(getTalk) as any; }
  public get talks(): Observable<Talk[]> { return this._store.select(getTalks) as any; }

  constructor(private _store: Store<TalkState>) {}

  public addTalk = (talk: Talk) => {
    this._store.dispatch(new actions.AddTalkAction(talk));
  }

  public removeTalk = (talk: Talk) => {
    this._store.dispatch(new actions.RemoveTalkAction(talk));
  }

  public updateTalk = (talk: Talk) => {
    this._store.dispatch(new actions.UpdateTalkAction(talk));
  }

  public selectTalk = (talk: Talk) => {
    this._store.dispatch(new actions.SelectTalkAction(talk));
  }

}
