import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[]=[];
  private cartKey = 'cart';

  constructor() { }

  addProduct(product: Product) { 
    const cart = this.getCart();
    const index = cart.findIndex(item => item._id === product._id);
    if (index === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[index].quantity++;
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  removeFromCart(productId: string): void {
    const cart = this.getCart();
    const index = cart.findIndex(item => item._id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
    }
  }

  getCart(): any[] {
    const cartStr = localStorage.getItem(this.cartKey);
    return cartStr ? JSON.parse(cartStr) : [];
  }

  removeAll(): void{
    localStorage.clear()
  }
}
