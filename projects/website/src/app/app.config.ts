import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { APP_INITIALIZER } from '@angular/core';
import { ApiService } from './services/api.service';
import { firstValueFrom } from 'rxjs';

export function initializeApp() {
  const apiService: ApiService = inject(ApiService);
  return (): Promise<any> => {
    return firstValueFrom(apiService.fetchInitialData());
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ]
};
