import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';

export function tokenGetter(): string | null {
	return localStorage.getItem('access_token');
}

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient()
	]
};
