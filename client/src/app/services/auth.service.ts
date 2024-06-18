import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

import Credentials from '../models/credentials.model';

@Injectable({providedIn: 'root'})
export class AuthService {
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
		localStorage.removeItem('access_token');
	}
}