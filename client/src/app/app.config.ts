import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxsModule, provideStore } from '@ngxs/store';
import { JwtInterceptor } from './services/jwt.interceptor';

import { routes } from './app.routes';
import { CartState } from './store/cart.state';

export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(NgxsModule.forRoot([CartState])),
		provideRouter(routes),
		provideHttpClient(withInterceptorsFromDi()),
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
	]
};
