import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BehaviorSubject, Observable, catchError, of, switchMap } from "rxjs";
import { Store } from "@ngxs/store";

import { ApiService } from "../../services/api.service";
import Product from "../../models/product.model";
import { AddToCart } from "../../store/cart.action";

@Component({
	selector: 'app-catalog',
	standalone: true,
	templateUrl: "./catalog.component.html",
	styleUrl: "./catalog.component.css",
	imports: [CommonModule, FormsModule]
})
export class CatalogComponent {
	searchInput: BehaviorSubject<string> = new BehaviorSubject<string>("");

	products: Observable<Array<Product>> = this.searchInput.pipe(
		switchMap(filter => this.apiService.getProducts(filter)),
		catchError(() => of([]))
	);

	constructor(private apiService: ApiService, private store: Store) {}

	search() {
	}

	addToCart(product: Product) {
		console.log("Adding product to cart: ", product);
		this.store.dispatch(new AddToCart(product));
	}
}