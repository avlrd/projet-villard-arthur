import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Credentials from '../models/credentials.model';

@Injectable({providedIn: 'root'})
export class ApiService {
	constructor(private http: HttpClient) {}

	getMessage(): Observable<any> {
		return this.http.get<any>('/api/test/1');
	}

	register(credentials: Credentials) {
		console.log("Register request");
		//return this.http.post<any>('/api/auth/register', credentials);
	}

	login(credentials: Credentials) {
		console.log("Login request");
		//return this.http.post<any>('/api/auth/login', credentials);
	}
}