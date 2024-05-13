import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `
		<app-header />
		<main>
			<router-outlet />
		</main>
		<app-footer />
	`,
	styles: `
		
	`,
	imports: [
		RouterOutlet,

		HeaderComponent,
		FooterComponent
	]
})
export class AppComponent {
	title = 'Home';
}
