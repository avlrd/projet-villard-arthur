import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html', 
	styleUrl: './app.component.css',
	imports: [
		RouterOutlet,

		HeaderComponent,
		FooterComponent
	]
})
export class AppComponent {
}
