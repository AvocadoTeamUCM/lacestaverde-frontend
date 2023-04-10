import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {

  public favorite:Boolean=false;
  public imageURL = ''

  @Output() event_routerToProduct = new EventEmitter<void>();
  @Input() product: Product = {}

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.imageURL = this._productService.imageURL;
  }


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
