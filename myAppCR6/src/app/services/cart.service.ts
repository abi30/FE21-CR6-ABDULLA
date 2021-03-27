import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = [];
  item;
  // items:string[] = [];

  constructor() {}

  addToCart(product:any) {
    this.cartItems.push(product);
  }

  getItems() {
    return this.cartItems;
  }

  getTotalSum(){
    return this.item.price;
  }

  itemsLength() {
    return this.cartItems.length;
  }

  clearCart() {
    this.cartItems = [];

    return this.cartItems;
  }
}
