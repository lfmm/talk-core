import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

constructor() {}

// available languages for i18n translation services
public get availableLanguages(): string[] { return ['en', 'fr', 'es', 'pt']; }

// available themes for app theming
public get availableThemes(): string[] { return ['default-theme', 'dark-theme', 'light-theme']; }

}
