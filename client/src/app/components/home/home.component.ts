import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiService } from "../../services/api.service";
import { Observable } from "rxjs";

@Component({
	selector: 'app-home',
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
	imports: [CommonModule]
})
export class HomeComponent implements OnInit {
	message: Observable<string> | undefined;

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.message = this.apiService.getMessage();
	}
}