import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface NavOption {

  name: string;
  tooltip: string;
  icon: string;
  action: () => {} | null;
  route: Array<string> | null;

}

export class NavOptionsBase {

  private _options: Array<NavOption>;
  private _optionsSubject: BehaviorSubject<Array<NavOption>>;
  get options(): BehaviorSubject<Array<NavOption>> {
    return this._optionsSubject;
  }

  constructor() {
    this._options = [];
    this._optionsSubject = new BehaviorSubject<Array<NavOption>>(this._options);
  }

  public addOption = (what: NavOption) => {
    this._options.push(what);
    this._optionsSubject.next(this._options);
  }

  public removeOption = (what: NavOption) => {
    if (this._options.indexOf(what) > -1) {
      this._options.splice(this._options.indexOf(what), 1);
      this._optionsSubject.next(this._options);
    }
  }

  public clearAllOptions = (silent: boolean = true) => {
    this._options.splice(0);
    if (!silent) {
      this._optionsSubject.next(this._options);
    }
  }

}

@Injectable()
export class NavOptions extends NavOptionsBase {

  constructor() {
    super();
  }

}
