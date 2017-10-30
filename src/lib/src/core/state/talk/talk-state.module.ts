import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TalkStateReducer, TalkState } from './talk.state';
import { TalkEffects } from './talk.effects';

import { TalkService } from './talk.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('TalkState', TalkStateReducer),
    EffectsModule.forFeature([TalkEffects])
  ],
  exports: [],
  providers: [],
})
export class TalkStateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TalkStateModule,
      providers: [TalkService]
    };
  }

}
