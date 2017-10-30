import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../../config';

import { CoreService } from '../../../state/core';

@Component({
  selector: 'is-talk-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public get availableThemes(): string[] { return this._cfg.availableThemes; }

  constructor(private _cfg: ConfigService, private _cs: CoreService) { }

  ngOnInit() { }

  public selectTheme = (theme: string) => {
    this._cs.changeTheme(theme);
  }

}
