import { Component } from "@angular/core";
import { Store } from "@ngxs/store";

@Component({
	selector: "app-cart",
	standalone: true,
	templateUrl: "./cart.component.html",
	styleUrl: "./cart.component.css"
})
export class CartComponent {
	products = this.store.select(CartState.getProducts);

	constructor(private store: Store) {}
}