import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent  implements OnInit {

  public numItens:Array<number> = [];

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    this.addNewItens();
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  addNewItens(){
    for( let i=0 ; i<5 ; i++){
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


  goProduct(){
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
