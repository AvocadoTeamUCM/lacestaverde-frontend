import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { Platform } from '@ionic/angular';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
})
export class ShoppingCartPageComponent  implements OnInit {

  public isMobile: Boolean;

  public products: Product [] = [];

  constructor(
    private router: Router,
    public platform: Platform,
    private _productService: ProductService
  ) 
  { 
    this.isMobile = !platform.is('desktop');

    this._productService.getProducts().pipe(
      map(res => this.products = [... res])
    ).subscribe();

    console.log(this.products.length);
  }

  ngOnInit() {}

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goProduct(){
    this.router.navigateByUrl("/shopping-cart/success");
    return;
  }

}
