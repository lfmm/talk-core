import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from './config.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class ConfigModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConfigModule,
      providers: [ConfigService]
    };
  }

}
