import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStore } from '@ngxs/store';
import { JwtInterceptor } from './services/jwt.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideStore(),
		provideRouter(routes),
		provideHttpClient(withInterceptorsFromDi()),
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
	]
};
