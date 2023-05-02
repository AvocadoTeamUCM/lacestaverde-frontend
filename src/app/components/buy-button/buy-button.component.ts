import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss'],
})
export class BuyButtonComponent  implements OnInit {

  @Input() public cuantity?:number = 0;
  @Input () product: Product = {};
 
  public buyProductCheck:Boolean = false;

  constructor(private cartService: CartService) {
  }
  
  ngOnInit() {
    if(this.cuantity!>0){
      this.buyProductCheck=true;
    }
    return;
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  
  buttonClick_buyProduct(num:number){
    this.cartService.addProduct(this.product);
    this.buyProductCheck=true;
    this.cuantity! += num;
    return;
  }

  buttonClic_noBuyProduct(){
    this.buyProductCheck=false;
    this.cuantity = 0;
    return;
  }

  pressKey_onEnter(){
    if(this.cuantity == 0 || this.cuantity == null){
      this.cuantity=0;
      this.buyProductCheck=false;
    }
    return;
  }



}
