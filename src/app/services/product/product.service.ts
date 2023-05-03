import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { Product } from '../../models/product';
import { ProductName } from '../../models/product';
import {NAMES} from '../utils/productNames'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = environment.baseURL;
  imageURL = environment.baseURL+'product/getFile/';
  prodName: ProductName = {}
  prodNMS : NAMES = {}

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get<Product[]>(`${this.baseURL}product`);
  };

  getNutritionalInfo(nameProduct: string) {
    if(nameProduct == 'Manzana Golden') {
      this.prodName.productName = "manzana"
    }else {
      this.prodName.productName = nameProduct
    }
    return this._http.post(`${this.baseURL}product/nutritionalInfo`, this.prodName)
  }

  getQrCode(productId: string) {
    return this._http.get<{}>(`${this.baseURL}product/qrgenerator/${productId}`)
  }

  getProductById(productId: string){
    return this._http.get<Product>(`${this.baseURL}product/${productId}`);
  };

  
}
