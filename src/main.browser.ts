import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';
import { ViewEncapsulation } from '@angular/core';

import { AppModule } from './app';

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule, { defaultEncapsulation: ViewEncapsulation.None })
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

bootloader(main);
