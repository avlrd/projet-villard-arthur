import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {	
	constructor(private authService: AuthService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.authService.jwtToken) {
			console.log("[From JwtInterceptor]: User is logged in");
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${this.authService.jwtToken}`
				}
			});
		}
		return next.handle(request).pipe(
			tap((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					const auth = event.headers.get("Authorization");
					if (auth) {
						this.authService.jwtToken = auth.split(/Bearer\s+(.*)$/i)[1];
						console.log("[From JwtInterceptor]: JWT token updated: ");
					}
				}
			}
		));
	}
}