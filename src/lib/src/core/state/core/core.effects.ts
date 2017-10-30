import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import * as CoreActions from './core.actions';

import { TranslationService } from '../../translation/translation.service';

@Injectable()
export class CoreEffects {

  // @Effect({ dispatch: false })
  // navigate$ = this.actions$.ofType(CoreActions.CoreActionTypes.CHANGE_LANGUAGE)
  //   .map((action: CoreActions.ChangeLanguageAction) => action.payload)
  //   .do((lang) => {
  //     console.log('changing current language to', lang);
  //     this._ts.changeLanguage(lang);
  //   });

  constructor(
    private actions$: Actions,
    private _ts: TranslationService
  ) {}

}
