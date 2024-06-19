import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const loginRedirectGuard: CanActivateFn = () => {
	const authService = inject(AuthService);
	const router = inject(Router);

	if (authService.isLoggedIn()) {
		console.log("User tried to access login page but is already logged in, redirecting to account page");
		router.navigate(["/account"]);
		return false;
	}
	else {
		return true;
	}
}