import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http'; 

platformBrowserDynamic().bootstrapModule(AppModule);
