import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'is-talk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input('logoSrc') public logoSrc: string;
  @Input('logoDesc') public logoDesc: string;

  @Output('logoClick') public logoClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onLogoClick = () => {
    this.logoClick.emit(null);
  }

}
