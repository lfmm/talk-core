import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/mergeMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { TranslateService, TranslatePipe } from '@ngx-translate/core';

import { ConfigService } from '../config/config.service';

import { CoreService } from '../state/core/core.service';

@Injectable()
export class TranslationService {

  private _cLang: BehaviorSubject<string>;
  get CurrentLanguage(): BehaviorSubject<string> { return this._cLang; }

  private _csLanguageSubscription: Subscription;

  constructor(private _cfg: ConfigService, private _ts: TranslateService, private _cs: CoreService) {
    this._cLang = new BehaviorSubject<string>(null);
    // subscribe to core language change and act upon it
    this._csLanguageSubscription = this._cs.currentLanguage.subscribe((lang) => {
      this.changeLanguage(lang);
    });
  }

  public start = (lang?: string) => {
    // add available languages
    this._ts.addLangs(this._cfg.availableLanguages);
    // verify if there is anything in store
    this._cs.currentLanguage.subscribe((c) => {
      if (c) {
        // previously set
        const browserLang = c;
        const currentLang = browserLang.match(/en|fr|es|pt/) ? browserLang : 'en';
        this._ts.setDefaultLang(currentLang);
        this.changeLanguage(currentLang);
      } else {
        // using current browser language has default and current, if any match available languages
        const browserLang = this._ts.getBrowserLang();
        const currentLang = browserLang.match(/en|fr|es|pt/) ? browserLang : 'en';
        this._ts.setDefaultLang(currentLang);
        this.changeLanguage(currentLang);
      }
    });
  }

  public stop = () => {
    if (this._csLanguageSubscription) { this._csLanguageSubscription.unsubscribe(); }
  }

  private changeLanguage = (lang: string) => {
    if (lang) {
      if (this._ts.langs.indexOf(lang) > -1) {
        this._ts.use(lang);
        this._cLang.next(lang);
      }
    }
  }

  public getTranslation = (what: string, params?: Object): Observable<string|Object|any> => {
    if (what) {
      return this._ts.get(what, params) as any;
    }
    return Observable.of('Key not found!');
  }

  public getFullTranslationPackage = (): Observable<{ lang: string, trans: any }> => {
    // get available languages
    const l: string[] = this._ts.getLangs();
    // join them and pass the obersvable to consume it
    if (l && l.length > 0) {
      const langs = Observable.of(...l);
      return langs.mergeMap(
        (v, i) => {
          return this._ts.getTranslation(v);
        },
        (oV: any, iV: any, oI: any, iI: any) => {
          return { lang: oV, trans: iV};
        }, l.length
      );
    }
    // return it
    return Observable.of(null);
  }

}
