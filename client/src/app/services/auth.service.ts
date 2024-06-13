import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import Credentials from '../models/credentials.model';

@Injectable({providedIn: 'root'})
export class AuthService {
	constructor(private http: HttpClient) {}

	register(credentials: Credentials) {
		console.log("Register request");
		//return this.http.post<any>('/api/auth/register', credentials);
	}

	login(credentials: Credentials) {
		console.log("Login request");
		//return this.http.post<any>('/api/auth/login', credentials);
	}
}