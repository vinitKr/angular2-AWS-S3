import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appModule } from './app.module';

platformBrowserDynamic().bootstrapModule(appModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));