import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// missing translation support
import { MissingTranslationHandler } from '@ngx-translate/core';
import { CoreMissingTranslationHandler } from './translation.missing';

// components
import { TranslateComponent } from './helper/translate.component';

const TRANSLATION_COMPONENTS = [TranslateComponent];

// services
import { TranslationService } from './translation.service';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [...TRANSLATION_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CoreMissingTranslationHandler }
    })
  ],
  exports: [TranslateModule, ...TRANSLATION_COMPONENTS],
  providers: [],
})
export class TranslationModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TranslationModule,
      providers: [TranslationService]
    };
  }

}
