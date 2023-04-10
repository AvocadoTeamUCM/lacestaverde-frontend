import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent  implements OnInit {

  public numItens:Array<number> = [];
  public products: Product [] = []

  constructor(
    private router:Router,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.addNewItens();
    
    this.fetchProducts();
  }

  fetchProducts(){
    this._productService.getProducts().pipe(
      map(res => this.products = [... res])
    ).subscribe()
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  addNewItens(){
    for( let i=0 ; i<6 ; i++){
      this.numItens.push(1);
    }
    return;
  }

  onIonInfinite(ev:Event) {
    this.addNewItens();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
    return;
  }


  goProduct(productID: string){
    this.router.navigateByUrl(`/catalog/product/${productID}`);
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
