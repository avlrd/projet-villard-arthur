import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from '../../services/auth.service';

import Credentials from "../../models/credentials.model";

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

	constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			login: ['', Validators.required],
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

		switch(this.register)
		{
			case true:
				this.authService.register(credentials);
				break;
			case false:
				this.authService.login(credentials);
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