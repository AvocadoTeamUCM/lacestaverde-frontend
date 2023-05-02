import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cest-product-cart',
  templateUrl: './cest-product-cart.component.html',
  styleUrls: ['./cest-product-cart.component.scss'],
})
export class CestProductCartComponent  implements OnInit {

  @Output() event_routerToProduct = new EventEmitter<string>();
  @Output () listProducts: EventEmitter<Product[]> = new EventEmitter<Product[]> ();

  imageURL = '';
  total?: string = 0 || '';

  products: Product[] = [];
  constructor(private cartService: CartService, private _service: ProductService, private router:Router,) {
    this.products = this.cartService.getCart();
    this.listProducts.emit(this.products);
  }

  ngOnInit() {
    this.imageURL = this._service.imageURL
    this.listProducts.emit(this.products);
  }

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  
  emitEvent_goProduct(productId:string){
    this.event_routerToProduct.emit(productId);
    return;
  }

  buttonClick_deleteProduct(productId: string){
    this.cartService.removeFromCart(productId);
    this.products = this.cartService.getCart();
    this.listProducts.emit(this.products);
  }

  totalPrice(price: number, quantity: number){
    return price * quantity
  }

}
