import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
})
export class ShoppingCartPageComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goProduct(){
    this.router.navigateByUrl("/catalog/product");
    return;
  }

}
