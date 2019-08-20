// https://angular.io/api/core/enableProdMode
import { enableProdMode } from '@angular/core';

// https://stackoverflow.com/a/37994020/929902
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
