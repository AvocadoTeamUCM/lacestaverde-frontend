import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cest-product-cart',
  templateUrl: './cest-product-cart.component.html',
  styleUrls: ['./cest-product-cart.component.scss'],
})
export class CestProductCartComponent  implements OnInit {

  @Output() event_routerToProduct = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  emitEvent_goProduct(){
    this.event_routerToProduct.emit();
    return;
  }

  buttonClic_deleteProduct(){
    return;
  }


}
