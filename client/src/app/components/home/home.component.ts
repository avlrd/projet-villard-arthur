import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiService } from "../../api.service";

@Component({
	selector: 'app-home',
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
	imports: [CommonModule]
})
export class HomeComponent {
	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.apiService.getMessage().subscribe(data => console.log(data));
	}
}