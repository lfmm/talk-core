import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../../config';

import { CoreService } from '../../../state/core';

@Component({
  selector: 'is-talk-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public get availableLanguages(): string[] { return this._cfg.availableLanguages; }

  constructor(private _cfg: ConfigService, private _cs: CoreService) { }

  ngOnInit() { }

  public selectLanguage = (theme: string) => {
    this._cs.changeLanguage(theme);
  }

}
