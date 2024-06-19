import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import Credentials from '../models/credentials.model';

@Injectable({providedIn: 'root'})
export class AuthService {
	jwtToken: string = "";

	constructor(private http: HttpClient) {}

	register(credentials: Credentials): Observable<string> {
		console.log("Register request");
		return this.http.post<any>('/api/auth/register', credentials, {responseType: 'text' as 'json'});
	}

	login(credentials: Credentials) {
		console.log("Login request");
		return this.http.post<any>('/api/auth/login', credentials, {responseType: 'text' as 'json'});
	}

	logout(): void {
		console.log("Logout request");
		this.jwtToken = "";
	}

	isLoggedIn(): boolean {
		return this.jwtToken !== "";
	}
}