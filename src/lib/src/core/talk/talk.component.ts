import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TalkService, Talk } from '../state/talk';

@Component({
  selector: 'is-talk-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkComponent implements OnInit {

  constructor(public ts: TalkService) { }

  ngOnInit() {
  }

}

