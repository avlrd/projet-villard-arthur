import Product from "../models/product.model";

export class AddToCart {
  static readonly type = '[Cart] Add to cart';
  constructor(public payload: Product) {}
}

export class RemoveFromCart {
  static readonly type = '[Cart] Remove from cart';
  constructor(public payload: Product) {}
}

export class ClearCart {
  static readonly type = '[Cart] Clear cart';
}