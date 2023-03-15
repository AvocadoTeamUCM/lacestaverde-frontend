import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent  implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goProduct(){
    this.router.navigateByUrl("/catalog/product");
    return;
  }

  buttonClic_goProfile(){
    this.router.navigateByUrl("/profile");
    return;
  }

  buttonClic_goShoppingCart(){
    this.router.navigateByUrl("/shopping-cart");
    return;
  }



}
