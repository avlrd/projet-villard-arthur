import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { CartItemStateModel, CartState } from "../../store/cart.state";
import { Observable } from "rxjs";
import { ClearCart, RemoveFromCart } from "../../store/cart.action";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-cart",
	standalone: true,
	templateUrl: "./cart.component.html",
	styleUrl: "./cart.component.css",
	imports: [CommonModule]
})
export class CartComponent {
	products: Observable<CartItemStateModel[]> = this.store.select(CartState.getCartItems);
	total: Observable<number> = this.store.select(CartState.getTotal);

	constructor(private store: Store) {}

	removeFromCart(product: CartItemStateModel) {
		this.store.dispatch(new RemoveFromCart(product.product));
	}

	clearCart() {
		this.store.dispatch(new ClearCart());
	}
}