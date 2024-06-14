import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBagShopping, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	imports: [
		RouterLink,
		FontAwesomeModule
	]
})
export class HeaderComponent {
	faBagShopping: IconDefinition = faBagShopping;
	faCartShopping: IconDefinition = faCartShopping;
	faUser: IconDefinition = faUser;
	faBars: IconDefinition = faBars;
}