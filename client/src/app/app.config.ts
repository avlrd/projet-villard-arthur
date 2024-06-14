import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';

import { routes } from './app.routes';

export function tokenGetter(): string | null {
	return localStorage.getItem('access_token');
}

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(
			withInterceptorsFromDi()
		),
		importProvidersFrom(
			JwtModule.forRoot({
				config: {
					tokenGetter: tokenGetter,
					allowedDomains: ['localhost:3000'],
					disallowedRoutes: []
				}
			})
		)
	]
};
