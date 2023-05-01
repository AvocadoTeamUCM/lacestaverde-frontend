import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router'
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../../../models/product';



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent  implements OnInit {

  public imageURL = '';
  private productID = '';

  public product: Product = {};
  public favorite:Boolean=false;

  constructor(
    private _router:Router,
    private _activatedRoute: ActivatedRoute,
    private _service: ProductService,
  ) { }

  ngOnInit() { 
    this._activatedRoute.params.subscribe(params => {
      this.productID = params['id']
    });
    this.imageURL = this._service.imageURL
    this.fetchProduct(this.productID)
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/

  fetchProduct(product_id: string) {
    this._service.getProductById(product_id).pipe(
      map(res => {
        this.product = res
      })
    ).subscribe()
  }

  buttonClic_goBusiness(businessId: string){
    this._router.navigateByUrl(`/business/businessId/${businessId}`);
    return;
  }

  buttonClic_buyProduct(){
    return;
  }

  buttonClic_favorite(){
    this.favorite = !this.favorite;
    return;
  }







}
