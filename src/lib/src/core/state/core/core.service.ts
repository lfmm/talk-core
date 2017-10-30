import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as CoreActions from './core.actions';
import { CoreState, getLanguage, getTheme } from './core.state';


@Injectable()
export class CoreService {

public get currentLanguage(): Observable<string> { return this._store.select(getLanguage) as any; }
public get currentTheme(): Observable<string> { return this._store.select(getTheme) as any; }

constructor(private _store: Store<CoreState>) {
  // this._store.select(getLanguage).subscribe((l) => { console.log('from store subscription', l); });
}

public changeLanguage = (language: string) => {
  this._store.dispatch(new CoreActions.ChangeLanguageAction(language));
}

public changeTheme = (theme: string) => {
  this._store.dispatch(new CoreActions.ChangeThemeAction(theme));
}

}
