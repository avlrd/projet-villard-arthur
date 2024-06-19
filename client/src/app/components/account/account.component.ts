import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-account',
	standalone: true,
	templateUrl: './account.component.html',
	styleUrl: './account.component.css'
})
export class AccountComponent {
	constructor(private authService: AuthService, private router: Router) {}

	disconnect() {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}