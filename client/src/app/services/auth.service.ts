import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

import Credentials from '../models/credentials.model';

@Injectable({providedIn: 'root'})
export class AuthService {
	constructor(private http: HttpClient) {}

	register(credentials: Credentials) {
		console.log("Register request");
		return this.http.post<any>('/api/auth/register', credentials);
	}

	login(credentials: Credentials) {
		console.log("Login request");
		return this.http.post<any>('/api/auth/login', credentials)
		.pipe(
			tap(response => {
				localStorage.setItem('access_token', response.token);
			})
		);
	}

	logout(): void {
		localStorage.removeItem('access_token');
	}
}