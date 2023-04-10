import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { NutritionalProduct } from '../../models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-stats',
  templateUrl: './product-stats.component.html',
  styleUrls: ['./product-stats.component.scss'],
})
export class ProductStatsComponent  implements OnInit , OnChanges{

  @Input () productName: string = '';
  
  public nutritionalInfo: NutritionalProduct = {} 
  constructor(private _service: ProductService,) { }

  ngOnInit() {
   // console.log(this.productName)
    //this.getNutritionalInfo("banana")
  }

  getNutritionalInfo(nameProduct: string) {
    this._service.getNutritionalInfo(nameProduct).pipe(
      map(res => this.nutritionalInfo = res)
    ).subscribe()
  }

  ngOnChanges() {
    if(this.productName !== undefined){
      this._service.getNutritionalInfo(this.productName).pipe(
        map(res => this.nutritionalInfo = res)
      ).subscribe()
    }
  }
}
