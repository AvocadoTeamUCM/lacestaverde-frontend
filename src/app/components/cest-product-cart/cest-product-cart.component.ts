import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-cest-product-cart',
  templateUrl: './cest-product-cart.component.html',
  styleUrls: ['./cest-product-cart.component.scss'],
})
export class CestProductCartComponent  implements OnInit {

  @Output() event_routerToProduct = new EventEmitter<void>();
  @Output () listProducts: EventEmitter<Product[]> = new EventEmitter<Product[]> ();

  imageURL = '';
  total?: string = 0 || '';

  products: Product[] = [];
  constructor(private cartService: CartService, private _service: ProductService) {
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
  
  emitEvent_goProduct(){
    this.event_routerToProduct.emit();
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
