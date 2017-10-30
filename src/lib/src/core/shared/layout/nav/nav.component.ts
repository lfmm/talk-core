import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { NavOption, NavOptionsBase } from '../models/nav.model';

@Component({
  selector: 'is-talk-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  @Input('options') public options: NavOptionsBase;

  @Output('open') public open: EventEmitter<NavOption> = new EventEmitter();
  @Output('close') public close: EventEmitter<NavOption> = new EventEmitter();
  @Output('click') public click: EventEmitter<NavOption> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onClick = (ev: Event, what: NavOption) => {
    ev.stopPropagation();
    this.click.emit(what);
  }

}
