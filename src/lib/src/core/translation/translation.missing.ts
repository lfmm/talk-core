import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class CoreMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.log('Translation Missing Key Handler', params);
    return 'MISSING';
  }
}
