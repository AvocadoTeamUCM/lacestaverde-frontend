import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
})
export class ShoppingCartPageComponent  implements OnInit, OnChanges{

  $total = 0
  cartProducts: Product[]=[]
  constructor(
    private router: Router,
    private cartService: CartService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/

  cestaProducts(products:Product[]){
    this.$total = 0
    this.cartProducts = products
    this.cartProducts.map(p => {
      this.$total += (p.quantity! * p.price!)
    })
  }
  buttonClic_goProduct(){
    this.$total = 0
    this.cartService.removeAll();
    this.router.navigateByUrl("/shopping-cart/success");
    return;
  }

}
