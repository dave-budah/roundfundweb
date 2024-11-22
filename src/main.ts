import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {InMemoryScrollingOptions} from "@angular/router";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
