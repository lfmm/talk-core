import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreStateReducer, CoreState } from './core.state';
import { CoreEffects } from './core.effects';

import { CoreService } from './core.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('CoreState', CoreStateReducer),
    EffectsModule.forFeature([CoreEffects])
  ],
  exports: [],
  providers: [],
})
export class CoreStateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreStateModule,
      providers: [CoreService]
    };
  }

}
