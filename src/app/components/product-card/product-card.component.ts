import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {

  public favorite:Boolean=false;

  @Output() event_routerToProduct = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_buyProduct(){
    return;
  }

  buttonClic_favorite(){
    this.favorite = !this.favorite;
    return;
  }

  emitEvent_goProduct(){
    this.event_routerToProduct.emit();
    return;
  }


}
