import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AuthComponent } from './components/auth/auth.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'catalog', component: CatalogComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: '**', component: NotFoundComponent}
];
