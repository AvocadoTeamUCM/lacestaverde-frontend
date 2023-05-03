import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router'
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../../../models/product';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent  implements OnInit {

  public imageURL = '';
  private productID = '';
  
  public qrCode = 'Jose eduardo';
  public product: Product = {};
  public favorite:Boolean=false;

  public isMobile: Boolean;

  constructor(
    private _router:Router,
    private _activatedRoute: ActivatedRoute,
    private _service: ProductService,
    public platform: Platform
  ) 
  { 
    this.isMobile = !platform.is('desktop');
  }

  ngOnInit() { 
    this._activatedRoute.params.subscribe(params => {
      this.productID = params['id']
    });
    this.imageURL = this._service.imageURL
    this.fetchProduct(this.productID)
    this._service.getQrCode(this.productID)
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/

  fetchProduct(product_id: string) {
    this._service.getProductById(product_id).pipe(
      map(res => {
        this.product = res
        this._service.getNutritionalInfo(this.product.name!).subscribe(res => {
          const nutritional = res
          const productInfo = {
            Nombre:this.product.name,
            Precio: this.product.price,
            Descripcion: this.product.description,
            Tienda: this.product.businessId?.name,
            Direccion: this.product.businessId?.address,
            "Información Nutricional": nutritional
          }
          this.qrCode = JSON.stringify(productInfo).slice(1, -1)
        });
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
