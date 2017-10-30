import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// environment
// import { environment } from '../../environments/environment';

// redux base
import { StoreModule, ActionReducer, Action, MemoizedSelector } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// redux store dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state management - router always first - mounts the root store and reducer for router only
// everything other state must be feature like
import { RouterStateModule } from './router/router-state.module';

// core state module - after RouterStateModule
import { CoreStateModule } from './core/core-state.module';

// talk state module
import { TalkStateModule } from './talk/talk-state.module';

// store logger for dev environment
import { storeLogger } from 'ngrx-store-logger';

export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}

// store sync to local storage
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['CoreState', 'RouterState', 'TalkState'],
    rehydrate: true,
    removeOnUndefined: true,
    storageKeySerializer: (key: string): string => 'italk_' + key
  })(reducer);
}

export const metaReducers = [localStorageSyncReducer]; 
// environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer]; // , logger];

export interface StateModuleOptions {

  coreStateActive: boolean;
  routerStateActive: boolean;

  syncWithLocalStorage: boolean;

  advancedLogger: boolean;

}

export const defaultStateModuleOptions: StateModuleOptions = {
  coreStateActive: true,
  routerStateActive: true,
  syncWithLocalStorage: true,
  advancedLogger: true
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {metaReducers}), // base store module - everything else will be feature store
    EffectsModule.forRoot([]), // base store effects module - everything else will be feature effects
    RouterStateModule.forRoot(),
    CoreStateModule.forRoot(),
    TalkStateModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 50 }) 
    // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [] // dev tools for redux
  ],
  exports: [],
  providers: [],
})
export class StateModule {

  static forRoot(config: StateModuleOptions = defaultStateModuleOptions): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: []
    };
  }

}
