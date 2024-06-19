import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../models/product.model';

@Injectable({providedIn: 'root'})
export class ApiService {
	constructor(private http: HttpClient) {}

	getMessage(): Observable<string> {
		return this.http.get<string>('/api/test', {responseType: 'text' as 'json'});
	}

	getProducts(filter: string): Observable<Array<Product>> {
		return this.http.get<Array<Product>>('/api/products', filter);
	}
}