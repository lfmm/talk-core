import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

// components
import { TalkComponent } from './talk.component';

const TALK_COMPONENTS = [TalkComponent];

@NgModule({
  declarations: [...TALK_COMPONENTS],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, TranslateModule ],
  exports: [...TALK_COMPONENTS],
  providers: [],
})
export class TalkModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TalkModule,
      providers: []
    };
  }

}
