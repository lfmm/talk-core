import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule, ActionReducer, MetaReducer, Action, combineReducers, compose } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

// effects, reducers & serializers
import { RouterEffects } from './router.effects';
import { routerStateReducers, CoreRouterStateSerializer } from './router.state';

// service to expose simple common action support
import { RouterService } from './router.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('RouterState', routerStateReducers),
    StoreRouterConnectingModule,
    EffectsModule.forFeature([RouterEffects]),
  ],
  exports: [],
  providers: [],
})
export class RouterStateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RouterStateModule,
      providers: [RouterService, { provide: RouterStateSerializer, useClass: CoreRouterStateSerializer }]
    };
  }

}
