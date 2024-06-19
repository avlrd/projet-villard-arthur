import { Action, Selector, State, StateContext } from "@ngxs/store";
import Product from "../models/product.model";
import { Injectable } from "@angular/core";
import { AddToCart, ClearCart, RemoveFromCart } from "./cart.action";

export class CartItemStateModel {
	product!: Product;
	quantity!: number;
}

export class CartStateModel {
	products: Array<CartItemStateModel> = [];
}

@State<CartStateModel>({
	name: "cart",
	defaults: {
		products: []
	}
})

@Injectable()
export class CartState {
	@Selector()
	static getCartItems(state: CartStateModel): Array<CartItemStateModel> {
		return state.products;
	}

	@Selector()
	static getTotal(state: CartStateModel): number {
		return state.products.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
	}

	@Action(AddToCart)
	addToCart({ getState, patchState }: StateContext<CartStateModel>, { payload: product }: AddToCart) {
		const state = getState();
		const index: number = state.products.findIndex((item: CartItemStateModel) => item.product.name === product.name);
		if (index === -1) {
			state.products.push({ product : product, quantity: 1 });
		} else {
			state.products[index].quantity++;
		}
		patchState({
			products: state.products
		});
	}

	@Action(RemoveFromCart)
	removeFromCart({ getState, patchState }: StateContext<CartStateModel>, { payload: product }: RemoveFromCart) {
		const state = getState();
		const index: number = state.products.findIndex((item: CartItemStateModel) => item.product.name === product.name);
		if (index === -1) {
			return;
		} else {
			if (state.products[index].quantity === 1) {
				state.products.splice(index, 1);
			} else {
				state.products[index].quantity--;
			}
		}
		patchState({
			products: state.products
		});
	}

	@Action(ClearCart)
	clearCart({ patchState }: StateContext<CartStateModel>) {
		patchState({
			products: []
		});
	}
}