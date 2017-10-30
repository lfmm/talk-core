import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { ThemeComponent } from './layout/theme/theme.component';
import { LanguageComponent } from './layout/language/language.component';

const SHARED_COMPONENTS = [NavComponent, HeaderComponent, ThemeComponent, LanguageComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [ CommonModule, FlexLayoutModule ],
  exports: [...SHARED_COMPONENTS],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}
