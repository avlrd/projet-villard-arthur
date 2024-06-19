import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AuthComponent } from './components/auth/auth.component';
import { AccountComponent } from './components/account/account.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './services/auth.guard';
import { loginRedirectGuard } from './services/loginredirect.guard';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'catalog', component: CatalogComponent },
	{ path: 'auth', component: AuthComponent, canActivate: [loginRedirectGuard]},
	{ path: 'account', component: AccountComponent, canActivate: [authGuard]},
	{ path: '**', component: NotFoundComponent}
];
