import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from '../../services/auth.service';

import Credentials from "../../models/credentials.model";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
	selector: 'app-auth',
	standalone: true,
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
	imports: [ReactiveFormsModule]
})
export class AuthComponent implements OnInit {
	loginForm: FormGroup = new FormGroup({});

	register: boolean = false;

	constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-_]{4,16}$/)]],
			password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)]]
		});
	}

	onSubmit(): void {
		const credentials: Credentials = {
			login: this.loginForm.value.login,
			password: this.loginForm.value.password
		};

		if (this.loginForm.invalid) {
			return;
		}

		var message;

		switch(this.register)
		{
			case true:
				message = this.authService.register(credentials).subscribe(
					() => {
						this.router.navigate(['/auth']);
					}
				);
				console.log(message);
				break;
			case false:
				message = this.authService.login(credentials).subscribe(
					() => {
						this.router.navigate(['/account']);
					}
				);
				console.log(message);
				break;
			default:
				console.error("Invalid register value");
				break;
		}
	}

	get login() { return this.loginForm.get('login'); }
	get password() { return this.loginForm.get('password'); }

	switch(): void {
		this.loginForm.reset();
		this.register = !this.register;
	}
}