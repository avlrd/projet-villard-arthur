import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";

import { ApiService } from "../../api.service";

@Component({
	selector: 'app-home',
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
	imports: [CommonModule]
})
export class HomeComponent {
	message: Observable<string> | undefined;

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.message = this.apiService.getMessage();
	}
}