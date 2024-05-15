import { Component } from "@angular/core";

import { ApiService } from "../../api.service";

@Component({
	selector: 'app-home',
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css"
})
export class HomeComponent {
	message: string = '';

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.apiService.getMessage().subscribe((data: any) => {
			this.message = data.message;
		});
	}
}