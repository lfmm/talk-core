import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TranslationService } from '../translation.service';

@Component({
  selector: 'is-talk-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  public translations: Array<{ lang: string, trans: any }> = [];

  private _keys: string[] = [];
  private _keyValueReference: Array<{ lang: string, key: string, value: string }> = [];
  public get keys(): string[] { return this._keys; }
  public xpto: string = <string>'';
  public keyValue = (lang: string, key: string): any => {
    const value: any = this._keyValueReference.filter((v): boolean => {
      if (v && v.lang === lang && v.key === key) { return true; }
      return false;
    });
    if (value && value.length === 1) {
      return value[0].value;
    } else {
      return this.xpto;
    }
  }

  public setValue = (lang: string, key: string, value: string): any => {
    const i: any = this._keyValueReference.filter((v): boolean => {
      if (v && v.lang === lang && v.key === key) { return true; }
      return false;
    });
    if (i && i.length === 1) {
      i[0].value = value;
      console.log('setting value lang key value', lang, key, value);
    }
  }

  public transToJSON = (): string => {
    let r: string = <string>'';
    // ++
    if (this.translations && this.translations.length > 0) {
      this.translations.forEach((t) => {
        if (t.trans) {
          r += t.lang + '\r\n';
          r += JSON.stringify(t.trans) + '\r\n';
        }
      });
    }
    // ++
    return r;
  }

  constructor(private _ts: TranslationService) { }

  ngOnInit() {
    // get available translations and print them out
    this._ts.getFullTranslationPackage().toArray().subscribe(r => {
      this.translations = r;
      this._keys = this.getKeys();
    });
  }

  public getKeys = (): string[] => {
    let r: string[] = [];
    if (this.translations && this.translations.length > 0) {
      // reset references
      this._keyValueReference.splice(0);
      // ++
      const what: any = this.translations[0].trans;
      r = this.getKeysRecursive(what);
      // ++ rebuild references
      this.translations.forEach(t => {
        this.getKeysReferencesRecursive(t.lang, t.trans);
      });
      // ++
    }
    return r;
  }

  private getKeysRecursive = (what: any, prefix: string = null): string[] => {
    const r: string[] = [];
    if (what) {
      Object.entries(what).forEach(kv => {
        if (typeof kv[1] !== typeof '') {
          // get recursive
          const p: string = prefix !== null ? prefix + '.' : '';
          const rr: string[] = this.getKeysRecursive(kv[1], p + kv[0]);
          if (rr && rr.length > 0) {
            rr.forEach(s => {
              r.push(kv[0] + '.' + s);
            });
          }
        } else {
          // add it to the keys, and add it to the references
          r.push(kv[0]);
        }
      });
    }
    return r;
  }

  private getKeysReferencesRecursive = (lang: string, what: any, prefix: string = null) => {
    if (what) {
      Object.entries(what).forEach(kv => {
        if (typeof kv[1] !== typeof '') {
          // get recursive
          const p: string = prefix !== null ? prefix + '.' : '';
          this.getKeysReferencesRecursive(lang, kv[1], p + kv[0]);
        } else {
          // reference it
          const p: string = prefix !== null ? prefix + '.' : '';
          this._keyValueReference.push({
            lang: lang,
            key: p + kv[0],
            value: kv[1]
          });
        }
      });
    }
  }

}
